import React from "react";
import "./Footer.css";
import Footersearch from "../../Images/Footersearch.png";
import Facebook from "../../Images/facebook.png";
import Instagram from "../../Images/instagram.png";
import Linkedin from "../../Images/linkedin.png";
import FooterContent from "./FooterContent";
import CompanyLogo from "../../Images/CompanyLogo.png";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <div>
          <div>
            <img src={CompanyLogo} />
          </div>
          <div>
            <div>
              <img src={Facebook} />
            </div>
            <div>
              <img src={Instagram} />
            </div>
            <div>
              <img src={Linkedin} />
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <div>
            <img src={Footersearch} />
          </div>
          <div>
            <FooterContent />
          </div>
        </div>
        <div></div>
        <div> &copy; Copyright. All rights reserved</div>
      </div>
    </div>
  );
}
