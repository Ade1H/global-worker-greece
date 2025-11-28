import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer style={footerStyle}>
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-4">
              <div style={logoSectionStyle}>
                <img 
                  src="/images/logo.png" 
                  alt="Global Worker Grekland" 
                  style={logoStyle}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <h5 style={companyNameStyle}>Global Worker Grekland</h5>
              </div>
              <p style={descriptionStyle}>
                Kopplar samman talangfulla arbetare med företag världen över. 
                Din partner för global rekrytering.
              </p>
              <div style={socialIconsStyle}>
                <a href="#" style={socialLinkStyle} className="social-icon">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" style={socialLinkStyle} className="social-icon">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" style={socialLinkStyle} className="social-icon">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" style={socialLinkStyle} className="social-icon">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h6 style={headingStyle}>Snabblänkar</h6>
              <ul style={listStyle}>
                <li><Link to="/" style={linkStyle}>Hem</Link></li>
                <li><Link to="/workers" style={linkStyle}>Arbetare</Link></li>
                <li><Link to="/companies" style={linkStyle}>Företag</Link></li>
                <li><Link to="/search" style={linkStyle}>Sök</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-3 mb-4">
              <h6 style={headingStyle}>Tjänster</h6>
              <ul style={listStyle}>
                <li><a href="#" style={linkStyle}>Rekrytering</a></li>
                <li><a href="#" style={linkStyle}>Arbetsförmedling</a></li>
                <li><a href="#" style={linkStyle}>CV-hantering</a></li>
                <li><a href="#" style={linkStyle}>Kompetensutveckling</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-3 mb-4">
              <h6 style={headingStyle}>Kontakt</h6>
              <ul style={listStyle}>
                <li style={contactItemStyle}>
                  <i className="bi bi-geo-alt me-2"></i>
                  Greklandsgatan 123, Stockholm
                </li>
                <li style={contactItemStyle}>
                  <i className="bi bi-telephone me-2"></i>
                  +46 70 123 45 67
                </li>
                <li style={contactItemStyle}>
                  <i className="bi bi-envelope me-2"></i>
                  info@globalworker.se
                </li>
                <li style={contactItemStyle}>
                  <i className="bi bi-clock me-2"></i>
                  Mån-Fre: 9:00 - 17:00
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={bottomBarStyle}>
            <div className="row align-items-center">
              <div className="col-md-6">
                <p style={copyrightStyle}>
                  &copy; {new Date().getFullYear()} Global Worker Grekland. Alla rättigheter förbehållna.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <div style={legalLinksStyle}>
                  <a href="#" style={legalLinkStyle}>Integritetspolicy</a>
                  <a href="#" style={legalLinkStyle}>Användarvillkor</a>
                  <a href="#" style={legalLinkStyle}>Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Inline style tag for hover effects */}
      <style jsx>{`
        .social-icon:hover {
          color: #ffd166 !important;
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        a:hover {
          color: white !important;
        }
      `}</style>
    </>
  );
}

// Styles
const footerStyle = {
  background: "linear-gradient(135deg, #0077b6 0%, #03045e 100%)",
  color: "white",
  padding: "50px 0 0 0",
  marginTop: "50px",
  width: "100%",
};

const logoSectionStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
};

const logoStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "5px",
  marginRight: "10px",
};

const companyNameStyle = {
  margin: 0,
  fontWeight: "bold",
  fontSize: "1.2rem",
};

const descriptionStyle = {
  fontSize: "0.9rem",
  lineHeight: "1.5",
  opacity: 0.9,
  marginBottom: "20px",
};

const socialIconsStyle = {
  display: "flex",
  gap: "15px",
};

const socialLinkStyle = {
  color: "white",
  fontSize: "1.2rem",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const headingStyle = {
  fontWeight: "bold",
  marginBottom: "15px",
  fontSize: "1rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const linkStyle = {
  color: "rgba(255,255,255,0.8)",
  textDecoration: "none",
  fontSize: "0.9rem",
  lineHeight: "2",
  transition: "color 0.3s ease",
  display: "block",
};

const contactItemStyle = {
  color: "rgba(255,255,255,0.8)",
  fontSize: "0.9rem",
  lineHeight: "1.8",
  marginBottom: "8px",
  display: "flex",
  alignItems: "flex-start",
};

const bottomBarStyle = {
  borderTop: "1px solid rgba(255,255,255,0.2)",
  padding: "20px 0",
  marginTop: "30px",
};

const copyrightStyle = {
  margin: 0,
  fontSize: "0.85rem",
  opacity: 0.8,
};

const legalLinksStyle = {
  display: "flex",
  gap: "20px",
  justifyContent: "flex-end",
  flexWrap: "wrap",
};

const legalLinkStyle = {
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
  fontSize: "0.85rem",
  transition: "color 0.3s ease",
};

export default Footer;