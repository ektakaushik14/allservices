import React from "react";
import "./Footer.css";
import FooterContent from "./FooterContent";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <div>
          <div>
            <img src={`https://avatars.dicebear.com/api/male/.svg`} />
          </div>
        </div>
        <div>
          <h1>Don't get left behind</h1>
        </div>
        <div>
          <p>
            We're on a mission to help you grow. Get the tools for viral content
            by joining our tribe today!
          </p>
        </div>
        <div>
          <button>Try it for free</button>
        </div>
      </div>
      <div>
        <FooterContent />
      </div>
    </div>
  );
}
