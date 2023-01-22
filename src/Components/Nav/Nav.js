import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavDropdownModal from "./NavDropdownModal";
import SignInIcon from "../../Images/signInIcon.png";
import CompanyLogo from "../../Images/CompanyLogo.png";

export default function Nav() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/login");
  };

  return (
    <div className="headerNav">
      <div>
        <div className="navLogo">
          <Link to="/">
            <img className="logo" src={CompanyLogo} alt="" />
          </Link>
        </div>
        <nav className="navContent">
          <ul className="navLinks">
            <li>Overview</li>
            <li>Features</li>
            <li>
              <Link to="pricing">Pricing</Link>
            </li>
            <li>
              <span className="navContactUs">Contact Us</span>
              <span>👋</span>
            </li>
          </ul>
        </nav>
        <div className="navSignUp">
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
