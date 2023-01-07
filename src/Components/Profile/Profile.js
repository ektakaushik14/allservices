import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import ProfileNav from "./ProfileNav";
import "./profile.css";

export default function Profile() {
  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("active");
  const [activeProfile, setActiveProfile] = useState(term);

  return (
    <div className="profile">
      <Nav black={true} />
      <div className="profileNavContainer">
        <ProfileNav active={activeProfile} />
      </div>
      <div className="activeProfileContainer"></div>
    </div>
  );
}
