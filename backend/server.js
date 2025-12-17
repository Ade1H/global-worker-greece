const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
require("dotenv").config();

const app = express();

// =====================
// CORS
// =====================
app.use(cors({
  origin: [
    "https://globalworker.nu",
    "https://global-worker-frontend.onrender.com",
    "http://localhost:5173",
  ],
}));

app.use(express.json());

// =====================
// MULTER (SAFE LIMITS)
// =====================
const upload = multer({
  storage: multer.diskStorage({
    destination: "/tmp",
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB MAX (SAFE FOR SENDGRID)
  },
  fileFilter: (req, file, cb) => {
    const allowedCvTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const allowedVideoTypes = ["video/mp4", "video/webm", "video/quicktime"];

    if (file.fieldname === "cv" && allowedCvTypes.includes(file.mimetype)) {
      cb(null, true);
    } else if (file.fieldname === "video" && allowedVideoTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Ogiltig filtyp"));
    }
  },
});

// =====================
// SENDGRID SMTP
// =====================
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
  connectionTimeout: 10000,
});

transporter.verify((err) => {
  if (err) console.error("SMTP error:", err);
  else console.log("✅ SendGrid SMTP ready");
});

// =====================
// SEND CV (EMAIL ATTACHMENT)
// =====================
app.post("/api/send-cv", upload.single("cv"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await transporter.sendMail({
      from: '"CV Formulär" <noreply@globalworker.nu>',
      replyTo: email,
      to: "Johan.karlsson@globalworker.nu",
      subject: `NYTT CV: ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone || "Ej angivet"}\n\n${message || ""}`,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              path: req.file.path,
            },
          ]
        : [],
    });

    return res.json({ success: true, message: "CV skickat" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Kunde inte skicka CV" });
  }
});

// =====================
// SEND VIDEO (LINK ONLY – NO ATTACHMENT)
// =====================
app.post("/api/send-video", upload.single("video"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Ingen video" });
    }

    // ⚠️ In production: upload to Cloudinary / S3 and generate URL
    const fakeVideoLink = `Video mottagen: ${req.file.originalname}`;

    await transporter.sendMail({
      from: '"Video CV" <noreply@globalworker.nu>',
      to: "Johan.karlsson@globalworker.nu",
      subject: "NYTT VIDEO CV",
      text: fakeVideoLink,
    });

    return res.json({ success: true, message: "Video mottagen (länk skickad)" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Kunde inte skicka video" });
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
app.listen(PORT, "0.0.0.0", () => console.log(`✅ Server running on ${PORT}`));