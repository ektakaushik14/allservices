import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
  const auth = getAuth();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const handleSignUp = () => {
    if (isUserLoggedIn) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          setIsUserLoggedIn(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        // navigate("/login");
      }
    });
  }, [auth]);

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
            <li>
              <Link to="features">Features</Link>
            </li>
            <li>
              <Link to="pricing">Pricing</Link>
            </li>
            <li>
              <Link to="support">
                <span className="navContactUs">Contact Us</span>
                <span>👋</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navSignUp">
          <button onClick={handleSignUp}>
            {isUserLoggedIn ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}
