import React from "react";
import "./pageNotFound.css";
import Hand from "../../Images/3dHand.png";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div className="pageNotFoundContent">
        we couldn't <br /> find the <br /> page you <br /> were <br /> looking
        for
      </div>
      <div className="pageNotFoundButton">
        <button>
          <Link to="/">back home</Link>
        </button>
      </div>
      <div className="pageNotFoundImage">
        <img src={Hand} alt="" />
      </div>
    </div>
  );
}
