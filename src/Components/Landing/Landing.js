import "./landing.css";
import { useContext, useState } from "react";
import Group from "../../Images/group.png";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
  };

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
          <button onClick={handleDashboard}>Get Started Now</button>
        </div>
      </div>
    </div>
  );
}
