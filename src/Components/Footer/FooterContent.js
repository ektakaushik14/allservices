import React from "react";
import { Link } from "react-router-dom";
import "./FooterContent.css";
export default function FooterContent() {
  return (
    <div className="footerContent">
      <div>
        <h4>Pricing</h4>
        <h4>Contact</h4>
        <h4>Terms</h4>
      </div>
      <div>
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/FB-64.png" />
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/INSTAGRAM-256.png" />
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/LINKEDIN-256.png" />
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/TWITTER-64.png" />
      </div>
      <div> &copy; 2023 Enhanciar. All rights reserved</div>
    </div>
  );
}
