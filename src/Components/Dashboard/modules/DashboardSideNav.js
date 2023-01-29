import React, { useState } from "react";
import "./dashboardModulesStyles/dashboardnav.css";
import Finger from "../../../Images/finger.png";

const Navbar = ({ handleActiveClick, activeNav }) => (
  <nav className="dashboardSideNavbar">
    <ul>
      <li
        className={activeNav === 0 ? "activeNav" : ""}
        onClick={() => handleActiveClick(0)}
      >
        <img
          src="https://img.icons8.com/material-rounded/512/dashboard-layout.png"
          alt=""
        />
        Dashboard
      </li>
      <li
        className={activeNav === 1 ? "activeNav" : ""}
        onClick={() => handleActiveClick(1)}
      >
        <img
          src="https://img.icons8.com/material-outlined/512/maintenance.png"
          alt=""
        />
        Tools
      </li>
      <li
        className={activeNav === 2 ? "activeNav" : ""}
        onClick={() => handleActiveClick(2)}
      >
        <img
          src="https://img.icons8.com/material-outlined/512/project-management.png"
          alt=""
        />
        Projects
      </li>
      <li
        className={activeNav === 3 ? "activeNav" : ""}
        onClick={() => handleActiveClick(3)}
      >
        <img
          src="https://img.icons8.com/material-outlined/512/filled-chat.png"
          alt=""
        />
        Chat
      </li>
    </ul>
  </nav>
);

export default function DashboardSideNav({ activeNavProp }) {
  const [activeNav, setActiveNav] = useState(0);
  const handleActiveClick = (active) => {
    setActiveNav(active);
    activeNavProp(active);
  };
  return (
    <div className="dashboardSideNav">
      <div className="dashboardSideNavHeader">
        <div></div>
        <div>
          <div>Name</div>
          <div>Free</div>
        </div>
      </div>
      <div className="horizontalLine"></div>
      <Navbar activeNav={activeNav} handleActiveClick={handleActiveClick} />
      <div className="horizontalLine"></div>
      <div className="dashboardPlanType">Plan : Free</div>
      <div className="dashboardWordCountContainer">
        <img
          src="https://img.icons8.com/color/512/charge-empty-battery.png"
          alt=""
        />
        <div>Word Balance : 3000</div>
      </div>
      <div className="dashboardSideNavCard">
        <div>Upgrade Now</div>
        <div>Unlock More Features</div>
        <div className="dashboardSideNavCardImgContainer">
          <img src={Finger} alt="" />
        </div>
      </div>
    </div>
  );
}
