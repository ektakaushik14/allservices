import React, { useEffect, useState } from "react";
import "./nav.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavDropdownModal from "./NavDropdownModal";
export default function Nav() {
  const [activeNav, setActiveNav] = useState("");
  const [isNavActive, setIsNavActive] = useState(false);

  const handleActiveNav = (nav) => {
    if (nav === activeNav) {
      setActiveNav("");
      setIsNavActive(false);
    } else {
      setIsNavActive(true);
      setActiveNav(nav);
    }
  };
  const clicked = () => {
    setActiveNav("");
    setIsNavActive(false);
  };
  useEffect(() => {
    document.addEventListener("mouseup", function (e) {
      var container = document.querySelector(".navDropdownModal");
      if (!container.contains(e.target)) {
        clicked();
      }
    });
  }, []);

  return (
    <div className="navbar">
      <div className="navContent">
        <div>
          <div id="logo">logo</div>
          <div className="navLinks">
            <ul>
              <li onClick={() => handleActiveNav("Features")}>
                Features <KeyboardArrowDownIcon />
              </li>
              <li onClick={() => handleActiveNav("Company")}>
                Company <KeyboardArrowDownIcon />
              </li>
              <li onClick={() => handleActiveNav("Support")}>
                Support <KeyboardArrowDownIcon />
              </li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <div className="login-button">Login</div>
      </div>
      <div className="navDropdownModal">
        {isNavActive ? (
          <NavDropdownModal clicked={() => clicked()} data={activeNav} />
        ) : null}
      </div>
    </div>
  );
}
