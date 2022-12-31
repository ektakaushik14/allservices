import "./landing.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Nav from "../Nav/Nav";
import { useState } from "react";
export default function Landing() {
  const [loggedOut, setLoggedOut] = useState(false);
  const isSignedOut = (e) => {
    console.log(loggedOut);
    setLoggedOut(e);
    setTimeout(() => {
      setLoggedOut(false);
      console.log(loggedOut);
    }, 5000);
  };

  return (
    <div className="landing">
      <Nav black={false} isSignedOut={(e) => isSignedOut(e)} />
      <div className="landing-page">
        <div className="land-section2"></div>
        <div className="land-section3"></div>
        <div className="land-section1"></div>
        <div className="landing-text">
          <div className="land-title">E-wallet loaded with features!</div>
          <div className="land-button">
            <button>
              <span> Get Started</span>
            </button>
          </div>
        </div>
      </div>
      {loggedOut && <div className="signInPrompt">Signed out successfully</div>}
    </div>
  );
}
