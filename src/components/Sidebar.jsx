import { useState } from "react"; 
import { Link } from "react-router-dom"; 

function Sidebar() { 
  const [open, setOpen] = useState(false); 
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (section) => { 
    setActiveDropdown(activeDropdown === section ? null : section); 
  }; 

  const sidebarStyle = { 
    width: open ? "220px" : "60px", 
    height: "100vh", 
    position: "fixed", 
    backgroundColor: "#343a40", 
    color: "white", 
    padding: "20px 10px", 
    transition: "0.3s", 
    overflow: "hidden", 
    whiteSpace: "nowrap" 
  }; 

  const titleStyle = { 
    opacity: open ? 1 : 0, 
    transition: "0.3s" 
  }; 

  const linkStyle = { 
    color: "white", 
    textDecoration: "none", 
    display: "block", 
    padding: "8px 10px" 
  }; 

  const dropdownLinkStyle = { 
    ...linkStyle, 
    paddingLeft: "30px" 
  }; 

  return ( 
    <div 
      onMouseEnter={() => setOpen(true)} 
      onMouseLeave={() => setOpen(false)} 
      style={sidebarStyle}
    > 
      <h2 style={titleStyle}>Global Worker Greece</h2> 

      <ul style={{ listStyle: "none", padding: 0 }}> 
        
        {/* Pages Dropdown */}
        <li>
          <div onClick={() => toggleDropdown("pages")} style={linkStyle}>
            {open ? "Sidor ▼" : "S"}
          </div>
          {activeDropdown === "pages" && (
            <div>
              <Link to="/" style={dropdownLinkStyle}>Hem</Link>
              <Link to="/search" style={dropdownLinkStyle}>Sök</Link>
              <Link to="/contact" style={dropdownLinkStyle}>Kontakt</Link>
            </div>
          )}
        </li>

        {/* Activities Dropdown */}
        <li> 
          <div 
            onClick={() => toggleDropdown("activities")} 
            style={linkStyle}
          > 
            {open ? "Aktiviteter ▼" : "A"} 
          </div> 

          {activeDropdown === "activities" && ( 
            <div> 
              <Link to="/activities/sports" style={dropdownLinkStyle}>Sport</Link> 
              <Link to="/activities/events" style={dropdownLinkStyle}>Evenemang</Link> 
              <Link to="/activities/workshops" style={dropdownLinkStyle}>Workshops</Link> 
            </div> 
          )} 
        </li> 

        {/* Workers Dropdown */} 
        <li> 
          <div 
            onClick={() => toggleDropdown("workers")} 
            style={linkStyle}
          > 
            {open ? "Arbetare ▼" : "A"} 
          </div> 

          {activeDropdown === "workers" && ( 
            <div> 
              <Link to="/workers" style={dropdownLinkStyle}>Alla arbetare</Link> 
              <Link to="/workers/add" style={dropdownLinkStyle}>Lägg till arbetare</Link> 
              <Link to="/workers/categories" style={dropdownLinkStyle}>Arbetarkategorier</Link> 
            </div> 
          )} 
        </li> 

        {/* Companies Dropdown */} 
        <li> 
          <div 
            onClick={() => toggleDropdown("companies")} 
            style={linkStyle}
          > 
            {open ? "Företag ▼" : "F"} 
          </div> 

          {activeDropdown === "companies" && ( 
            <div> 
              <Link to="/companies" style={dropdownLinkStyle}>Alla företag</Link> 
              <Link to="/companies/add" style={dropdownLinkStyle}>Lägg till företag</Link> 
            </div> 
          )} 
        </li> 

        {/* Jobs Dropdown */} 
        <li>
          <div 
            onClick={() => toggleDropdown("jobs")} 
            style={linkStyle}
          > 
            {open ? "Jobb ▼" : "J"} 
          </div> 

          {activeDropdown === "jobs" && ( 
            <div> 
              <Link to="/jobs" style={dropdownLinkStyle}>Alla jobb</Link>
              <Link to="/jobs/create" style={dropdownLinkStyle}>Skapa jobb</Link>
            </div> 
          )} 
        </li> 

        {/* Documents Dropdown */} 
        <li> 
          <div 
            onClick={() => toggleDropdown("documents")} 
            style={linkStyle}
          > 
            {open ? "Dokument ▼" : "D"} 
          </div> 

          {activeDropdown === "documents" && ( 
            <div> 
              <Link to="/documents/cv" style={dropdownLinkStyle}>CV:n</Link> 
            </div> 
          )} 
        </li> 

        {/* Settings Dropdown */} 
        <li>
          <div 
            onClick={() => toggleDropdown("settings")} 
            style={linkStyle}
          > 
            {open ? "Inställningar ▼" : "I"} 
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
  ); 
} 

export default Sidebar;
