import React, { useEffect } from "react";
import "./content.css";
import contentServices from "./contentConstants";

const ContentServices = (reverse) => {
  return (
    <div className="contentServicesContainer">
      {contentServices.map((m, i) => (
        <div
          className={
            [1, 4, 7, 9].includes(i) ? "activeContentServicesContainer" : ""
          }
        >
          {m}
        </div>
      ))}
    </div>
  );
};

export default function Content() {
  return (
    <div className="content">
      <div className="contentHeading">
        your assistant can do <br />{" "}
        <span className="dynamicServiceText">anything</span>
      </div>
      <div className="contentSubheading">
        Discover all the ways the Jasper AI Content Platform can help streamline
        your creative workflows.
      </div>
      <div className="contentCTA">
        <button>Solve Your Problem</button>
      </div>
      <div className="contentAllServicesMarquee">
        <ContentServices />
        <ContentServices />
        <div></div>
      </div>
      <div className="contentTopNav">
        <div>Social Media</div>
        <div>Video Ideas</div>
        <div>Articles</div>
        <div>Emails</div>
        <div>Advertising</div>
      </div>
    </div>
  );
}
