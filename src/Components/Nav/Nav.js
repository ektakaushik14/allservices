import React from "react";
import "./nav.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Nav() {
  return (
    <div className="navbar">
      <div className="navContent">
        <div>
          <div id="logo">logo</div>
          <div className="navLinks">
            <ul>
              <li>
                Features <KeyboardArrowDownIcon />
              </li>
              <li>
                Company <KeyboardArrowDownIcon />
              </li>
              <li>
                Support <KeyboardArrowDownIcon />
              </li>
              <li>
                Pricing <KeyboardArrowDownIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className="login-button">Login</div>
      </div>
    </div>
  );
}
