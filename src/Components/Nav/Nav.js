import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import "./nav.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavDropdownModal from "./NavDropdownModal";
import SignInIcon from "../../Images/signInIcon.png";
export default function Nav({ isSignedOut, black }) {
  const [user, loading] = useAuthState(auth);
  const [activeNav, setActiveNav] = useState("");
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {}, [user]);

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
      var container = document.querySelector(".navbar");
      if (!container.contains(e.target)) {
        clicked();
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        isSignedOut(true);
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={black ? "blackTrue" : "navbar"}>
      <div className="navContent">
        <div>
          <div id="logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="navLinks">
            <ul>
              <li
                className={activeNav === "Features" ? "active" : ""}
                onClick={() => handleActiveNav("Features")}
              >
                Features <KeyboardArrowDownIcon />
              </li>
              <li
                className={activeNav === "Company" ? "active" : ""}
                onClick={() => handleActiveNav("Company")}
              >
                Company <KeyboardArrowDownIcon />
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        {!user ? (
          <div className="nav-login-button">
            <Link to="/login">
              <button>
                <img src={SignInIcon} alt="" />
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div className="nav-login-button">
            <button onClick={handleSignOut}>
              <img src={SignInIcon} alt="" />
              Sign Out
            </button>
          </div>
        )}
      </div>
      <div className="navDropdownModal">
        {isNavActive ? (
          <NavDropdownModal clicked={() => clicked()} data={activeNav} />
        ) : null}
      </div>
    </div>
  );
}
