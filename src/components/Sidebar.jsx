import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileSidebar = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  // Dark Modern Design
  const sidebarWidth = isMobile ? (mobileOpen ? "280px" : "0") : "280px";
  
  const sidebarStyle = {
    width: sidebarWidth,
    height: "100vh",
    position: "fixed",
    zIndex: 1000,
    top: 0,
    left: isMobile ? (mobileOpen ? "0" : "-280px") : "0",
    background: "#1a1a2e",
    color: "white",
    padding: "25px 0",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRight: "2px solid #16213e",
    boxShadow: "5px 0 30px rgba(0, 0, 0, 0.3)",
    overflowY: "auto",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 25px 30px",
    marginBottom: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const logoStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "12px",
    objectFit: "contain",
    backgroundColor: "white",
    padding: "8px",
    marginRight: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  };

  const titleStyle = {
    fontSize: "1.3rem",
    margin: 0,
    fontWeight: "700",
    color: "#0ea5e9",
    letterSpacing: "0.5px",
  };

  const subtitleStyle = {
    fontSize: "0.8rem",
    color: "#94a3b8",
    marginTop: "3px",
  };

  const navSectionStyle = {
    padding: "0 15px",
    marginBottom: "15px",
  };

  const sectionTitleStyle = {
    fontSize: "0.75rem",
    color: "#94a3b8",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "20px 0 10px 15px",
    opacity: 0.8,
  };

  const linkStyle = {
    color: "#cbd5e1",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: "14px 20px",
    borderRadius: "8px",
    margin: "4px 15px",
    transition: "all 0.3s ease",
    backgroundColor: "transparent",
    borderLeft: "3px solid transparent",
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "#16213e",
    color: "#0ea5e9",
    borderLeft: "3px solid #0ea5e9",
    fontWeight: "600",
  };

  const iconStyle = {
    fontSize: "1.2rem",
    width: "25px",
    textAlign: "center",
    marginRight: "15px",
    color: "#0ea5e9",
  };

  const textStyle = {
    fontSize: "0.95rem",
    fontWeight: "500",
    flex: 1,
  }

  const badgeStyle = {
    backgroundColor: '#0ea5e9',
    color: '#1a1a2e',
    borderRadius: '12px',
    padding: '3px 9px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    marginLeft: '8px',
    boxShadow: "0 2px 8px rgba(14, 165, 233, 0.3)",
  };

  const dropdownLinkStyle = {
    ...linkStyle,
    paddingLeft: "60px",
    fontSize: "0.9rem",
    margin: "4px 15px 4px 30px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderLeft: "3px solid rgba(14, 165, 233, 0.3)",
  };

  const activeDropdownLinkStyle = {
    ...dropdownLinkStyle,
    backgroundColor: "rgba(14, 165, 233, 0.1)",
    color: "#0ea5e9",
    fontWeight: "600",
  };

  const hamburgerStyle = {
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: 1100,
    background: "#1a1a2e",
    color: "#0ea5e9",
    border: "2px solid #0ea5e9",
    borderRadius: "12px",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
    transition: "all 0.3s ease",
  };

  const statsFooterStyle = {
    marginTop: 'auto',
    padding: '20px 15px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: "15px 15px 0 0",
    margin: "20px 10px 0",
  };

  return (
    <>
      {isMobile && (
        <button
          style={hamburgerStyle}
          onClick={handleMobileToggle}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      )}

      {isMobile && mobileOpen && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 999,
          }}
          onClick={closeMobileSidebar}
        />
      )}

      <div style={sidebarStyle}>
        <div style={logoContainerStyle}>
          <img 
            src="/images/logo.png" 
            alt="Global Worker Logo"
            style={logoStyle}
          />
          <div>
            <h2 style={titleStyle}>Global Worker</h2>
            <div style={subtitleStyle}>Grekland</div>
          </div>
        </div>

        <div style={navSectionStyle}>
          <div style={sectionTitleStyle}>Navigation</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <Link 
                to="/" 
                style={isLinkActive("/") ? activeLinkStyle : linkStyle}
                onClick={closeMobileSidebar}
              >
                <i className="bi bi-house" style={iconStyle}></i>
                <span style={textStyle}>Hem</span>
              </Link>
            </li>

            <li>
              <Link 
                to="/karriar" 
                style={isLinkActive("/karriar") ? activeLinkStyle : linkStyle}
                onClick={closeMobileSidebar}
              >
                <i className="bi bi-briefcase" style={iconStyle}></i>
                <span style={textStyle}>Karriärmöjligheter</span>
                <span style={badgeStyle}>12</span>
              </Link>
            </li>

            <li>
              <Link 
                to="/tjanster" 
                style={isLinkActive("/tjanster") ? activeLinkStyle : linkStyle}
                onClick={closeMobileSidebar}
              >
                <i className="bi bi-gear" style={iconStyle}></i>
                <span style={textStyle}>Våra Tjänster</span>
              </Link>
            </li>
          </ul>
        </div>

        <div style={navSectionStyle}>
          <div style={sectionTitleStyle}>Information</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <div 
                onClick={() => toggleDropdown("about")} 
                style={{
                  ...linkStyle,
                  backgroundColor: activeDropdown === "about" ? "rgba(14, 165, 233, 0.1)" : "transparent",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-info-circle" style={iconStyle}></i>
                <span style={textStyle}>Om Oss</span>
                <i className={`bi bi-chevron-${activeDropdown === "about" ? "up" : "down"}`} 
                   style={{...iconStyle, marginRight: 0, fontSize: "0.9rem", color: "#94a3b8"}}></i>
              </div>
              {activeDropdown === "about" && (
                <div>
                  <Link 
                    to="/about" 
                    style={isLinkActive("/about") ? activeDropdownLinkStyle : dropdownLinkStyle} 
                    onClick={closeMobileSidebar}
                  >
                    <i className="bi bi-building" style={{...iconStyle, fontSize: "0.9rem", marginRight: "10px"}}></i>
                    <span style={{...textStyle, fontSize: "0.9rem"}}>Om Företaget</span>
                  </Link>
                  <Link 
                    to="/team" 
                    style={isLinkActive("/team") ? activeDropdownLinkStyle : dropdownLinkStyle} 
                    onClick={closeMobileSidebar}
                  >
                    <i className="bi bi-people" style={{...iconStyle, fontSize: "0.9rem", marginRight: "10px"}}></i>
                    <span style={{...textStyle, fontSize: "0.9rem"}}>Vårt Team</span>
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link 
                to="/galleri" 
                style={isLinkActive("/galleri") ? activeLinkStyle : linkStyle}
                onClick={closeMobileSidebar}
              >
                <i className="bi bi-images" style={iconStyle}></i>
                <span style={textStyle}>Galleri</span>
              </Link>
            </li>

            <li>
              <Link 
                to="/blogg" 
                style={isLinkActive("/blogg") ? activeLinkStyle : linkStyle}
                onClick={closeMobileSidebar}
              >
                <i className="bi bi-journal-text" style={iconStyle}></i>
                <span style={textStyle}>Blogg</span>
              </Link>
            </li>
          </ul>
        </div>

       {/*   <div style={navSectionStyle}>
          <div style={sectionTitleStyle}>Resurser</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <Link 
                to="/rekommendationer" 
                style={isLinkActive("/rekommendationer") ? activeLinkStyle : linkStyle}
                onClick={closeMobileSidebar}
              >
                <i className="bi bi-star" style={iconStyle}></i>
                <span style={textStyle}>Rekommendationer</span>
              </Link>
            </li>

            <li>
              <Link 
                to="/resurser" 
                style={isLinkActive("/resurser") ? activeLinkStyle : linkStyle}
                onClick={closeMobileSidebar}
              >
                <i className="bi bi-file-earmark-text" style={iconStyle}></i>
                <span style={textStyle}>Dokument & Resurser</span>
              </Link>
            </li>
          </ul>
        </div>*/}

        <div style={navSectionStyle}>
          <div style={sectionTitleStyle}>Kontakt</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <Link 
                to="/contact" 
                style={isLinkActive("/contact") ? activeLinkStyle : linkStyle}
                onClick={closeMobileSidebar}
              >
                <i className="bi bi-envelope" style={iconStyle}></i>
                <span style={textStyle}>Kontakta Oss</span>
              </Link>
            </li>
          </ul>
        </div>

        <div style={statsFooterStyle}>
          <div style={{ marginBottom: '15px', color: '#0ea5e9', fontWeight: 'bold', fontSize: '0.9rem' }}>
            <i className="bi bi-graph-up me-2"></i>
            Snabbstatistik
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem', color: '#cbd5e1' }}>
            <span>Placerade arbetare:</span>
            <span style={{ color: '#0ea5e9', fontWeight: 'bold' }}>13</span>
          </div>
          {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem', color: '#cbd5e1' }}>
            <span>Samarbetspartners:</span>
            <span style={{ color: '#0ea5e9', fontWeight: 'bold' }}>42</span>
          </div> */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#cbd5e1' }}>
            <span>Jobb just nu:</span>
            <span style={{ color: '#0ea5e9', fontWeight: 'bold' }}>9</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;