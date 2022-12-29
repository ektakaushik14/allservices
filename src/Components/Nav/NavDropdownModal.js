import React, { useEffect, useState } from "react";
import NavData from "./navConstants";
import Workbench from "../../Images/workbench.png";
import SmartPhone from "../../Images/smartphone.png";

export default function NavDropdownModal({ data, clicked }) {
  const [selectedNavData, setSelectedNavData] = useState("");

  useEffect(() => {
    setSelectedNavData(NavData[0][data]);
  }, [data]);

 

  const SelectedNavContent = () => {
    return (
      <div className="selectedNavContent">
        {selectedNavData &&
          selectedNavData.map((m) => (
            <div>
              <div className="selectedNavContentImg">
                <img src={m.icon} alt="" />
              </div>
              <div className="selectedNavContentSubHeading">
                <div>{m.heading}</div>
                <div>{m.subHeading}</div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="navModal">
      <div className="navModalContent">
        <div className="navModalImage">
          <img src={data === "Features" ? Workbench : SmartPhone} alt="" />
        </div>
        <div className="navModalLinks">
          <SelectedNavContent />
        </div>
      </div>
    </div>
  );
}
