const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Multer config
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { 
    fileSize: 50 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedCvTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    
    const allowedVideoTypes = [
      "video/webm",
      "video/mp4",
      "video/quicktime"
    ];
    
    if (file.fieldname === "cv" && allowedCvTypes.includes(file.mimetype)) {
      cb(null, true);
    } else if (file.fieldname === "video" && allowedVideoTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Ogiltig filtyp"));
    }
  },
});

// TRANSPORTER för Loopia
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test connection
transporter.verify(function(error, success) {
  if (error) {
    console.log("SMTP error:", error);
  } else {
    console.log("✅ SMTP server redo");
  }
});

// POST /api/send-cv
app.post("/api/send-cv", upload.single("cv"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const cvFile = req.file;

    console.log("📄 CV från:", name, email);

    const mailOptions = {
      from: `"CV Formulär" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: 'Johan.karlsson@globalworker.nu',
      subject: `NYTT CV: ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone || "Ej angivet"}\n\nMeddelande:\n${message || "Inget meddelande"}\n\n---\nSkickat via Global Worker Grekland`,
      html: `<h3>Nytt CV har skickats</h3>
             <p><strong>Namn:</strong> ${name}</p>
             <p><strong>E-post:</strong> ${email}</p>
             <p><strong>Telefon:</strong> ${phone || "Ej angivet"}</p>
             <p><strong>Meddelande:</strong> ${message || "Inget meddelande"}</p>
             <p><strong>CV-fil:</strong> ${cvFile ? cvFile.originalname : "Ingen fil"}</p>
             <hr><p><em>Skickat via Global Worker Grekland</em></p>`,
      attachments: cvFile ? [{
        filename: cvFile.originalname,
        content: cvFile.buffer
      }] : []
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ CV skickat");
    
    res.json({ success: true, message: "CV:t har skickats!" });
    
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Kunde inte skicka: " + err.message 
    });
  }
});

// POST /api/send-video
app.post("/api/send-video", upload.single("video"), async (req, res) => {
  try {
    const videoFile = req.file;

    if (!videoFile) {
      return res.status(400).json({ success: false, message: "Ingen video fil" });
    }

    console.log("🎥 Video mottaget:", videoFile.originalname);

    const mailOptions = {
      from: `"Video CV" <${process.env.EMAIL_USER}>`,
      to: 'Johan.karlsson@globalworker.nu',
      subject: "NYTT VIDEO CV",
      text: `Ett nytt video CV har skickats.\n\nFil: ${videoFile.originalname}\nStorlek: ${Math.round(videoFile.size / 1024 / 1024)} MB\n\n---\nSkickat via Global Worker Grekland`,
      html: `<h3>Nytt Video CV</h3>
             <p><strong>Filnamn:</strong> ${videoFile.originalname}</p>
             <p><strong>Filstorlek:</strong> ${Math.round(videoFile.size / 1024 / 1024)} MB</p>
             <hr><p><em>Skickat via Global Worker Grekland</em></p>`,
      attachments: [{
        filename: videoFile.originalname,
        content: videoFile.buffer,
        contentType: videoFile.mimetype
      }]
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Video skickat");
    
    res.json({ success: true, message: "Video CV har skickats!" });
    
  } catch (err) {
    console.error("Video error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Kunde inte skicka video: " + err.message 
    });
  }
});

// Error handling
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ success: false, message: err.message });
  }
  res.status(500).json({ success: false, message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server körs på port ${PORT}`));