import "./landing.css";
import { useState } from "react";
import Group from "../../Images/group.png";
export default function Landing() {
  // const [loggedOut, setLoggedOut] = useState(false);
  // const isSignedOut = (e) => {
  //   console.log(loggedOut);
  //   setLoggedOut(e);
  //   setTimeout(() => {
  //     setLoggedOut(false);
  //     console.log(loggedOut);
  //   }, 5000);
  // };

  return (
    <div className="landing-page">
      <div className="landing-page-img">
        <img src={Group} alt="" />
      </div>
      
      <div className="landing-page-content">
        <div className="landing-page-tagline">Lorem ipsum dolor sit amet</div>
        <div className="landing-page-heading">Lorem ipsum dolor sit</div>
        <div className="landing-page-subheading">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem alias
          atque obcaecati?
        </div>
        <div className="landing-page-CTA">
          <button>Get Started Now</button>
        </div>
      </div>
    </div>
  );
}
