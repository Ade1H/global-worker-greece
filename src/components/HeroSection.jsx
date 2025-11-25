import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function HeroSection() {
  const images = [
    "/images/hero1.png",
    "/images/hero2.png",
    "/images/hero3.png"
  ];

  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={img}
              className="d-block w-100"
              alt={`slide-${index}`}
              style={{ height: "70vh", objectFit: "cover" }}
            />

            {/* Overlay + Text */}
            <div
              className="carousel-caption d-flex flex-column justify-content-center h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            >
              <h1 className="display-3 fw-bold">Välkommen till Global Worker Greece</h1>
              <p className="lead">
                Hitta arbetare, jobb, företag, dokument och mer – allt på ett ställe.
              </p>
              <div className="d-flex gap-3 justify-content-center mt-3">
                <Link to="/workers" className="btn btn-primary btn-lg">
                  Hitta arbetare
                </Link>
                <Link to="/jobs" className="btn btn-outline-light btn-lg">
                  Bläddra jobb
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default HeroSection;
