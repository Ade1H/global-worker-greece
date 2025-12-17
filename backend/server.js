const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Multer config för CV
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

// Root route för test
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
    timestamp: new Date(),
    endpoints: {
      send_cv: "/api/send-cv",
      welcome_email: "/api/welcome-email"
    }
  });
});

// API: Skicka CV
app.post("/api/send-cv", upload.single("cv"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const msg = {
      to: "Johan.karlsson@globalworker.nu",
      from: "Johan.karlsson@globalworker.nu",
      replyTo: email,
      subject: `NYTT CV: ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone || "Ej angivet"}\n\n${message || ""}`,
      attachments: req.file ? [{
        content: req.file.buffer.toString("base64"),
        filename: req.file.originalname,
        type: req.file.mimetype,
        disposition: "attachment",
      }] : [],
    };

    await sgMail.send(msg);
    res.json({ success: true, message: "CV skickat" });
  } catch (err) {
    console.error("SendGrid error:", err);
    res.status(500).json({ success: false, message: "Mail misslyckades" });
  }
});

// API: Automatiskt mail vid besök
const visitorLog = {};
app.get("/api/welcome-email", async (req, res) => {
  try {
    const visitorIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const now = Date.now();
    const oneHour = 1000 * 60 * 60;

    if (visitorLog[visitorIP] && now - visitorLog[visitorIP] < oneHour) {
      return res.json({ success: false, message: "Mail redan skickat för denna IP inom 1 timme" });
    }

    const msg = {
      to: "Johan.karlsson@globalworker.nu",
      from: "Johan.karlsson@globalworker.nu",
      subject: "Någon har besökt hemsidan",
      text: `En besökare från IP ${visitorIP} har precis öppnat hemsidan.`,
    };

    await sgMail.send(msg);
    visitorLog[visitorIP] = now;
    res.json({ success: true, message: "Mail skickat till Johan" });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ success: false, message: "Kunde inte skicka mail" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`✅ Server running on port ${PORT}`));
