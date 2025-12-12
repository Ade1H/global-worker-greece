const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Multer config for both CV and Video uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { 
    fileSize: 50 * 1024 * 1024, // 50MB max for videos
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
      cb(new Error("Ogiltig filtyp. Endast PDF/DOCX för CV eller WebM/MP4 för video."));
    }
  },
});

// RESEND TRANSPORTER (ersätter Loopia)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});


// Test email connection
transporter.verify(function(error, success) {
  if (error) {
    console.log("SMTP connection error:", error);
  } else {
    console.log("✅ Resend SMTP server is ready to send emails");
  }
});

// POST /api/send-cv - handle CV submissions
app.post("/api/send-cv", upload.single("cv"), async (req, res) => {
  const { name, email, phone, message } = req.body;
  const cvFile = req.file;

  console.log("📄 CV mottaget från:", { name, email, phone });

  try {
    const mailOptions = {
      from: 'CV Formulär <noreply@globalworker.nu>',  // Verifiera denna i Resend
      replyTo: email,
      to: 'Johan.karlsson@globalworker.nu',           // ALLTID till DIG
      subject: "NYTT CV: " + name,
      text: "Namn: " + name + "\n" +
            "E-post: " + email + "\n" +
            "Telefon: " + (phone || "Ej angivet") + "\n\n" +
            "Meddelande:\n" + (message || "Inget meddelande") + "\n\n" +
            "---\n" +
            "Skickat via Global Worker Grekland webbplats",
      html: "<h3>Nytt CV har skickats</h3>" +
            "<p><strong>Namn:</strong> " + name + "</p>" +
            "<p><strong>E-post:</strong> " + email + "</p>" +
            "<p><strong>Telefon:</strong> " + (phone || "Ej angivet") + "</p>" +
            "<p><strong>Meddelande:</strong> " + (message || "Inget meddelande") + "</p>" +
            "<p><strong>CV-fil:</strong> " + (cvFile ? cvFile.originalname : "Ingen fil") + "</p>" +
            "<hr><p><em>Skickat via Global Worker Grekland webbplats</em></p>"
    };

    if (cvFile) {
      mailOptions.attachments = [
        {
          filename: cvFile.originalname,
          content: cvFile.buffer,
        }
      ];
    }

    await transporter.sendMail(mailOptions);
    console.log("✅ CV email skickat till Johan.karlsson@globalworker.nu");
    
    res.json({ 
      success: true, 
      message: "CV:t har skickats till Johan Karlsson!" 
    });
    
  } catch (err) {
    console.error("CV Email sending error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Kunde inte skicka e-post: " + err.message 
    });
  }
});

// POST /api/send-video - handle Video submissions
app.post("/api/send-video", upload.single("video"), async (req, res) => {
  const videoFile = req.file;

  console.log("🎥 Video CV mottaget, filstorlek:", videoFile ? videoFile.size : 'Ingen fil');

  try {
    const mailOptions = {
      from: 'Video CV <video@globalworker.nu>',  // Verifiera denna i Resend
      to: 'Johan.karlsson@globalworker.nu',      // ALLTID till DIG
      subject: "NYTT VIDEO CV",
      text: "Ett nytt video CV har skickats via webbplatsen.\n\n" +
            "---\n" +
            "Skickat via Global Worker Grekland webbplats",
      html: "<h3>Nytt Video CV har skickats</h3>" +
            "<p><strong>Filnamn:</strong> " + (videoFile ? videoFile.originalname : "Ingen fil") + "</p>" +
            "<p><strong>Filstorlek:</strong> " + (videoFile ? Math.round(videoFile.size / 1024 / 1024) + " MB" : "Okänd") + "</p>" +
            "<hr><p><em>Skickat via Global Worker Grekland webbplats</em></p>"
    };

    if (videoFile) {
      mailOptions.attachments = [
        {
          filename: "video-cv.webm",
          content: videoFile.buffer,
          contentType: "video/webm"
        }
      ];
    }

    await transporter.sendMail(mailOptions);
    console.log("✅ Video email skickat till Johan.karlsson@globalworker.nu");
    
    res.json({ 
      success: true, 
      message: "Video CV har skickats till Johan Karlsson!" 
    });
    
  } catch (err) {
    console.error("Video Email sending error:", err);
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
  } else if (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("✅ Backend körs på port " + PORT));