const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
require("dotenv").config();

const app = express();
app.use(cors());

// Multer config: memory storage + file filter + size limit per file type
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 }, // max 50MB for any file
  fileFilter: (req, file, cb) => {
    const allowedCvTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const allowedVideoTypes = ["video/mp4"];

    if (file.fieldname === "cv" && allowedCvTypes.includes(file.mimetype)) {
      cb(null, true);
    } else if (file.fieldname === "video" && allowedVideoTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Endast PDF/DOCX för CV eller MP4 för video tillåten"));
    }
  },
});

// Nodemailer transporter (Loopia SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

// POST /api/request - handle both CV + video
app.post(
  "/api/request",
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  async (req, res) => {
    const { name, email, phone, message } = req.body;
    const cvFile = req.files["cv"] ? req.files["cv"][0] : null;
    const videoFile = req.files["video"] ? req.files["video"][0] : null;

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Ny ansökan från ${name}`,
        text: `
Namn: ${name}
Email: ${email}
Telefon: ${phone}

Meddelande:
${message}
        `,
        attachments: [
          ...(cvFile
            ? [
                {
                  filename: cvFile.originalname,
                  content: cvFile.buffer,
                },
              ]
            : []),
          ...(videoFile
            ? [
                {
                  filename: videoFile.originalname,
                  content: videoFile.buffer,
                },
              ]
            : []),
        ],
      });

      console.log("E-post skickad med CV/video!");
      res.json({ success: true, message: "Ansökan skickad!" });
    } catch (err) {
      console.error("Fel vid e-post:", err);
      res.status(500).json({ success: false, message: err.message || "Kunde inte skicka e-post" });
    }
  }
);

// Error handling for Multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ success: false, message: err.message });
  } else if (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  next();
});

app.listen(5000, () => console.log("Backend körs på http://localhost:5000"));
