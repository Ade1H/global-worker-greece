import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false); // desktop hover
  const [mobileOpen, setMobileOpen] = useState(false); // mobile toggle
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarStyle = {
    width: open || mobileOpen ? "220px" : "60px",
    height: "100vh",
    position: isMobile ? "fixed" : "fixed",
    zIndex: 1000,
    top: 0,
    left: mobileOpen ? 0 : isMobile ? "-220px" : 0,
    backgroundColor: "#343a40",
    color: "white",
    padding: "20px 10px",
    transition: "0.3s",
    overflowY: "auto",
    whiteSpace: "nowrap",
  };

  const titleStyle = {
    opacity: open || mobileOpen ? 1 : 0,
    transition: "0.3s",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    padding: "8px 10px",
    cursor: "pointer",
  };

  const dropdownLinkStyle = {
    ...linkStyle,
    paddingLeft: "30px",
  };

  return (
    <>
      {/* Hamburger for mobile */}
      {isMobile && (
        <button
          className="btn btn-dark position-fixed top-2 start-2"
          style={{ zIndex: 1100 }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      )}

      <div
        onMouseEnter={() => !isMobile && setOpen(true)}
        onMouseLeave={() => !isMobile && setOpen(false)}
        style={sidebarStyle}
      >
        <h2 style={titleStyle}>Global Worker Greece</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {/* Pages */}
          <li>
            <div onClick={() => toggleDropdown("pages")} style={linkStyle}>
              {open || mobileOpen ? "Sidor ▼" : "S"}
            </div>
            {activeDropdown === "pages" && (
              <div>
                <Link to="/" style={dropdownLinkStyle}>Hem</Link>
                <Link to="/search" style={dropdownLinkStyle}>Sök</Link>
                <Link to="/contact" style={dropdownLinkStyle}>Kontakt</Link>
              </div>
            )}
          </li>

          {/* Activities */}
          <li>
            <div onClick={() => toggleDropdown("activities")} style={linkStyle}>
              {open || mobileOpen ? "Aktiviteter ▼" : "A"}
            </div>
            {activeDropdown === "activities" && (
              <div>
                <Link to="/activities/sports" style={dropdownLinkStyle}>Sport</Link>
                <Link to="/activities/events" style={dropdownLinkStyle}>Evenemang</Link>
                <Link to="/activities/workshops" style={dropdownLinkStyle}>Workshops</Link>
              </div>
            )}
          </li>

          {/* Workers */}
          <li>
            <div onClick={() => toggleDropdown("workers")} style={linkStyle}>
              {open || mobileOpen ? "Arbetare ▼" : "A"}
            </div>
            {activeDropdown === "workers" && (
              <div>
                <Link to="/workers" style={dropdownLinkStyle}>Alla arbetare</Link>
                <Link to="/workers/add" style={dropdownLinkStyle}>Lägg till arbetare</Link>
                <Link to="/workers/categories" style={dropdownLinkStyle}>Arbetarkategorier</Link>
              </div>
            )}
          </li>

          {/* Companies */}
          <li>
            <div onClick={() => toggleDropdown("companies")} style={linkStyle}>
              {open || mobileOpen ? "Företag ▼" : "F"}
            </div>
            {activeDropdown === "companies" && (
              <div>
                <Link to="/companies" style={dropdownLinkStyle}>Alla företag</Link>
                <Link to="/companies/add" style={dropdownLinkStyle}>Lägg till företag</Link>
              </div>
            )}
          </li>

          {/* Jobs */}
          <li>
            <div onClick={() => toggleDropdown("jobs")} style={linkStyle}>
              {open || mobileOpen ? "Jobb ▼" : "J"}
            </div>
            {activeDropdown === "jobs" && (
              <div>
                <Link to="/jobs" style={dropdownLinkStyle}>Alla jobb</Link>
                <Link to="/jobs/create" style={dropdownLinkStyle}>Skapa jobb</Link>
              </div>
            )}
          </li>

          {/* Documents */}
          <li>
            <div onClick={() => toggleDropdown("documents")} style={linkStyle}>
              {open || mobileOpen ? "Dokument ▼" : "D"}
            </div>
            {activeDropdown === "documents" && (
              <div>
                <Link to="/documents/cv" style={dropdownLinkStyle}>CV:n</Link>
              </div>
            )}
          </li>

          {/* Settings */}
          <li>
            <div onClick={() => toggleDropdown("settings")} style={linkStyle}>
              {open || mobileOpen ? "Inställningar ▼" : "I"}
            </div>
            {activeDropdown === "settings" && (
              <div>
                <Link to="/settings/profile" style={dropdownLinkStyle}>Profil</Link>
                <Link to="/settings/language" style={dropdownLinkStyle}>Språk</Link>
                <Link to="/settings/notifications" style={dropdownLinkStyle}>Aviseringar</Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
