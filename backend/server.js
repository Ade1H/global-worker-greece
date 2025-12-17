const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();

// =====================
// BASIC SETUP
// =====================
app.use(express.json());
app.use(cors({
  origin: [
    "https://globalworker.nu",
    "https://global-worker-frontend.onrender.com",
    "http://localhost:5173",
  ],
}));

// =====================
// SENDGRID API (NO SMTP)
// =====================
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// =====================
// MULTER (SAFE MEMORY LIMIT)
// =====================
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB MAX
  },
  fileFilter: (req, file, cb) => {
    const allowedCvTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (file.fieldname === "cv" && allowedCvTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Ogiltig filtyp"));
    }
  },
});

// =====================
// SEND CV (SENDGRID API)
// =====================
app.post("/api/send-cv", upload.single("cv"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const msg = {
      to: "Johan.karlsson@globalworker.nu",
      from: "noreply@globalworker.nu", // MUST be verified in SendGrid
      replyTo: email,
      subject: `NYTT CV: ${name}`,
      text: `
Namn: ${name}
E-post: ${email}
Telefon: ${phone || "Ej angivet"}

${message || ""}
      `,
      attachments: req.file
        ? [
            {
              content: req.file.buffer.toString("base64"),
              filename: req.file.originalname,
              type: req.file.mimetype,
              disposition: "attachment",
            },
          ]
        : [],
    };

    await sgMail.send(msg);

    return res.json({ success: true, message: "CV skickat" });
  } catch (err) {
    console.error("SendGrid error:", err);
    return res.status(500).json({ success: false, message: "Mail misslyckades" });
  }
});

// =====================
// HEALTH CHECK
// =====================
app.get("/", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`✅ Server running on port ${PORT}`));
