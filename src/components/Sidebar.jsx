import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ onToggle }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && open) {
        setOpen(false);
        if (onToggle) onToggle(false);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open, onToggle]);

  // Prevent zoom on touch
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', preventZoom, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', preventZoom);
    };
  }, []);

  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setOpen(true);
      if (onToggle) onToggle(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpen(false);
      setActiveDropdown(null);
      if (onToggle) onToggle(false);
    }
  };

  const handleMobileToggle = () => {
    const newMobileOpen = !mobileOpen;
    setMobileOpen(newMobileOpen);
    if (onToggle) onToggle(newMobileOpen);
  };

  const closeMobileSidebar = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (onToggle) onToggle(false);
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  const sidebarStyle = {
    width: open || mobileOpen ? "280px" : "60px",
    height: "100vh",
    position: "fixed",
    zIndex: 1000,
    top: 0,
    left: mobileOpen ? 0 : isMobile ? "-280px" : 0,
    backgroundColor: "#005293",
    color: "white",
    padding: "20px 10px",
    transition: "width 0.3s ease, left 0.3s ease",
    overflowY: "auto",
    whiteSpace: "nowrap",
    transform: "translateZ(0)",
    background: "linear-gradient(180deg, #005293 0%, #00457e 100%)",
  };

  const titleStyle = {
    opacity: open || mobileOpen ? 1 : 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
    fontSize: "1.1rem",
    margin: 0,
    whiteSpace: "normal",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    padding: "12px 15px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    userSelect: "none",
    borderRadius: "8px",
    marginBottom: "5px",
    transition: "all 0.2s ease",
    backgroundColor: "transparent",
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "#ffcd00",
    color: "#005293",
    fontWeight: "600",
  };

  const dropdownLinkStyle = {
    ...linkStyle,
    paddingLeft: "30px",
    backgroundColor: "transparent",
    fontSize: "0.9rem",
    marginBottom: "3px",
  };

  const activeDropdownLinkStyle = {
    ...dropdownLinkStyle,
    backgroundColor: "rgba(255, 205, 0, 0.2)",
    color: "#ffcd00",
  };

  const logoStyle = {
    width: '80px', 
    height: '80px', 
    marginRight: open || mobileOpen ? '10px' : '0',
    borderRadius: '5px',
    transition: 'margin-right 0.3s ease',
    flexShrink: 0,
    objectFit: 'contain',
    backgroundColor: 'white',
    padding: '2px',
  };

  const badgeStyle = {
    backgroundColor: '#dc2626',
    color: 'white',
    borderRadius: '10px',
    padding: '2px 6px',
    fontSize: '0.7rem',
    marginLeft: '8px',
    fontWeight: 'bold',
  };

  return (
    <>
      {/* Hamburger for mobile */}
      {isMobile && (
        <button
          className="btn"
          style={{ 
            zIndex: 1100, 
            top: "15px", 
            left: "15px",
            border: "2px solid #005293",
            backgroundColor: "#ffcd00",
            color: "#005293",
            fontSize: "18px",
            padding: "8px 12px",
            transform: "translateZ(0)",
            position: "fixed",
            borderRadius: "8px",
          }}
          onClick={handleMobileToggle}
        >
          ☰
        </button>
      )}

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && mobileOpen && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
          onClick={closeMobileSidebar}
        />
      )}

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={sidebarStyle}
      >
        {/* Logo and Title */}
        <div className='d-flex align-items-center mb-4' style={{ minHeight: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
          <img 
            src="/images/logo.png" 
            alt="Global Worker Logo"
            style={logoStyle}
          />
          <div>
            <h2 style={titleStyle}>Global Worker</h2>
            <div style={{...titleStyle, fontSize: '0.9rem', color: '#ffcd00'}}>Sverige</div>
          </div>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {/* Hem Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/" 
              style={isLinkActive("/") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-house me-2"></i>
              {(open || mobileOpen) ? "Hem" : "H"}
            </Link>
          </li>

          {/* Karriärmöjligheter Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/karriar" 
              style={isLinkActive("/karriar") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/karriar")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/karriar")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-briefcase me-2"></i>
              {(open || mobileOpen) ? "Karriärmöjligheter" : "K"}
              <span style={badgeStyle}>12</span>
            </Link>
          </li>

          {/* Tjänster Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/tjanster" 
              style={isLinkActive("/tjanster") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/tjanster")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/tjanster")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-gear me-2"></i>
              {(open || mobileOpen) ? "Tjänster" : "T"}
            </Link>
          </li>

          {/* Om Oss Section */}
          <li style={{ marginBottom: "8px" }}>
            <div 
              onClick={() => toggleDropdown("about")} 
              style={{
                ...(isLinkActive("/om") || isLinkActive("/team") ? activeLinkStyle : linkStyle),
                backgroundColor: activeDropdown === "about" ? "#495057" : (isLinkActive("/om") || isLinkActive("/team") ? "#ffcd00" : "transparent"),
              }}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/om") && !isLinkActive("/team")) {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/om") && !isLinkActive("/team") && activeDropdown !== "about") {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              <i className="bi bi-info-circle me-2"></i>
              {(open || mobileOpen) ? "Om Oss ▼" : "O"}
            </div>
            {activeDropdown === "about" && (
              <div style={{ marginLeft: "10px", marginTop: "5px" }}>
                <Link 
                  to="/about" 
                  style={isLinkActive("/about") ? activeDropdownLinkStyle : dropdownLinkStyle} 
                  onClick={closeMobileSidebar}
                >
                  <i className="bi bi-building me-2"></i>
                  Om Företaget
                </Link>
                <Link 
                  to="/team" 
                  style={isLinkActive("/team") ? activeDropdownLinkStyle : dropdownLinkStyle} 
                  onClick={closeMobileSidebar}
                >
                  <i className="bi bi-people me-2"></i>
                  Vårt Team
                </Link>
              </div>
            )}
          </li>

          {/* Galleri Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/galleri" 
              style={isLinkActive("/galleri") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/galleri")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/galleri")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-images me-2"></i>
              {(open || mobileOpen) ? "Galleri" : "G"}
            </Link>
          </li>

          {/* Blogg Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/blogg" 
              style={isLinkActive("/blogg") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/blogg")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/blogg")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-journal-text me-2"></i>
              {(open || mobileOpen) ? "Blogg" : "B"}
            </Link>
          </li>

          {/* Rekommendationer Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/rekommendationer" 
              style={isLinkActive("/rekommendationer") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/rekommendationer")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/rekommendationer")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-star me-2"></i>
              {(open || mobileOpen) ? "Rekommendationer" : "R"}
            </Link>
          </li>

          {/* Evenemang Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/evenemang" 
              style={isLinkActive("/evenemang") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/evenemang")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/evenemang")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-calendar-event me-2"></i>
              {(open || mobileOpen) ? "Evenemang" : "E"}
            </Link>
          </li>

          {/* Resurser Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/resurser" 
              style={isLinkActive("/resurser") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/resurser")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/resurser")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-file-earmark-text me-2"></i>
              {(open || mobileOpen) ? "Resurser" : "RS"}
            </Link>
          </li>

          {/* Kontakt Section */}
          <li style={{ marginBottom: "8px" }}>
            <Link 
              to="/contact" 
              style={isLinkActive("/contact") ? activeLinkStyle : linkStyle}
              onClick={closeMobileSidebar}
              onMouseEnter={(e) => {
                if (!isMobile && !isLinkActive("/contact")) e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                if (!isMobile && !isLinkActive("/contact")) e.target.style.backgroundColor = "transparent";
              }}
            >
              <i className="bi bi-envelope me-2"></i>
              {(open || mobileOpen) ? "Kontakt" : "K"}
            </Link>
          </li>
        </ul>

        {/* Quick Stats Footer */}
        {(open || mobileOpen) && (
          <div style={{ 
            marginTop: 'auto', 
            padding: '15px 10px', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            fontSize: '0.8rem'
          }}>
            <div style={{ marginBottom: '8px', color: '#ffcd00', fontWeight: 'bold' }}>Snabbstatistik</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>Placerade arbetare:</span>
              <span style={{ color: '#ffcd00', fontWeight: 'bold' }}>156</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>Samarbetspartners:</span>
              <span style={{ color: '#ffcd00', fontWeight: 'bold' }}>42</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Lyckade matchningar:</span>
              <span style={{ color: '#ffcd00', fontWeight: 'bold' }}>28</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;