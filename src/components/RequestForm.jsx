import React, { useState } from "react";

function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv" || name === "video") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    if (formData.cv) data.append("cv", formData.cv);
    if (formData.video) data.append("video", formData.video);

    try {
      const response = await fetch("http://localhost:5000/api/request", {
        method: "POST",
        body: data,
      });

      const resData = await response.json();

      if (resData.success) {
        alert("Formuläret skickades!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          cv: null,
          video: null,
        });
      } else {
        alert(resData.message || "Något gick fel. Försök igen senare.");
      }
    } catch (err) {
      console.error(err);
      alert("Misslyckades att skicka formuläret. Försök igen senare.");
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 rounded-4 border-0">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Ansök / Kontakta oss</h2>
          <p className="text-muted mb-0">
            Fyll i formuläret och bifoga CV (PDF/DOCX, max 5MB) samt video (MP4, max 50MB). 
            Vi kontaktar dig snart. <br />
            <strong>Johan.karlsson@globalworker.nu</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg rounded-3"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ditt namn"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control form-control-lg rounded-3"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="din@exempel.com"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg rounded-3"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+46 70 123 45 67"
              />
            </div>
            <div className="col-md-6">
              <textarea
                name="message"
                className="form-control form-control-lg rounded-3"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Skriv ditt meddelande här"
              ></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Bifoga CV (PDF/DOCX, max 5MB)</label>
              <input
                type="file"
                name="cv"
                className="form-control"
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Bifoga Video (MP4, max 50MB)</label>
              <input
                type="file"
                name="video"
                className="form-control"
                accept="video/mp4"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary btn-lg px-5 rounded-3">
              Skicka Ansökan
            </button>
          </div>
        </form>

        <hr className="my-4" />
        <p className="text-center text-muted small mb-0">
          Du kan även kontakta oss direkt på: <strong>Johan.karlsson@globalworker.nu</strong>
        </p>
      </div>
    </div>
  );
}

export default RequestForm;
