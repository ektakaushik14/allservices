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

// name is hardcoded right now!!!!!!

export default function Nav({ isSignedOut, black }) {
  const [user, loading] = useAuthState(auth);
  const [activeNav, setActiveNav] = useState("");
  const [isNavActive, setIsNavActive] = useState(false);
  const [userImg, setUserImg] = useState("");
  const [toggleSignedInDropDownModal, setToggleSignedInDropDownModal] =
    useState(false);

  const navigate = useNavigate();

  const handleToggleSignedInDropDownModal = () => {
    setIsNavActive(false);
    setToggleSignedInDropDownModal(!toggleSignedInDropDownModal);
  };

  const handleRedirection = (dest) => {
    navigate(`/profile?active=${dest}`);
  };

  const SignedInDropDownModal = ({ img, userName }) => {
    return (
      <div className="signedInDropDownModal">
        <div onClick={handleToggleSignedInDropDownModal}>
          {img ? <img src={img} alt="" /> : <div>{userName.charAt(0)}</div>}
        </div>
      </div>
    );
  };

  const SecondDropDownModal = ({ img, userName }) => {
    return (
      <div className="secondDropDownModal">
        <div className="secondDropDownModalHeader">
          <div>
            {img ? <img src={img} alt="" /> : <div>{userName.charAt(0)}</div>}
          </div>
          <div>{userName}</div>
        </div>
        <div className="secondDropDownModalDivider"></div>
        <div
          onClick={() => handleRedirection("edit")}
          className="secondDropDownModalContentContainer"
        >
          <div className="secondDropDownModalIcon"></div>
          <div className="secondDropDownModalTitle">Edit Profile</div>
          <div className="secondDropDownModalArrow">{">"}</div>
        </div>
        <div
          onClick={() => handleRedirection("settings")}
          className="secondDropDownModalContentContainer"
        >
          <div className="secondDropDownModalIcon"></div>
          <div className="secondDropDownModalTitle">Settings & Privacy</div>
          <div className="secondDropDownModalArrow">{">"}</div>
        </div>
        <div
          onClick={() => handleRedirection("help")}
          className="secondDropDownModalContentContainer"
        >
          <div className="secondDropDownModalIcon"></div>
          <div className="secondDropDownModalTitle">Help & Support</div>
          <div className="secondDropDownModalArrow">{">"}</div>
        </div>
        <div
          onClick={handleSignOut}
          className="secondDropDownModalContentContainer"
        >
          <div className="secondDropDownModalIcon"></div>
          <div className="secondDropDownModalTitle">Logout</div>
          <div className="secondDropDownModalArrow">{">"}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setUserImg(user?.photoURL);
  }, [user]);

  const handleActiveNav = (nav) => {
    setToggleSignedInDropDownModal(false);
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
    setToggleSignedInDropDownModal(false);
  };
  useEffect(() => {
    document.addEventListener("mouseup", function (e) {
      var container = document.querySelector(".navbar");
      var dropDownUserProfile = document.querySelector(".secondDropDownModal");
      if (
        !container.contains(e.target) ||
        !dropDownUserProfile.contains(e.target)
      ) {
        clicked();
      }
    });
  }, []);

  const handleSignOut = () => {
    setToggleSignedInDropDownModal(false);
    signOut(auth)
      .then(() => {
        isSignedOut(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={black ? "blackTrue" : "navbar"}>
      <div className="navContent">
        <div>
          <div className="logo">
            <Link to="/">
              <img src={CompanyLogo} />
            </Link>
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
              <Link to="/pricing">Pricing</Link>
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
          <SignedInDropDownModal img={userImg} userName="Shanu" />
        )}
      </div>
      {toggleSignedInDropDownModal ? (
        <div className="secondDropDownModalContainer">
          <SecondDropDownModal img={userImg} userName="Shanu" />
        </div>
      ) : null}
      <div className="navDropdownModal">
        {isNavActive ? (
          <NavDropdownModal clicked={() => clicked()} data={activeNav} />
        ) : null}
      </div>
    </div>
  );
}
