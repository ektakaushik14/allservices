import React from "react";
import "./PptDashboard.css";
import { useNavigate } from "react-router-dom";
import { contentTemplates } from "../../utils/PptDashboardConstants";

export default function PptDashboard(tempCard) {
  const navigate = useNavigate();
  const handlePptClick = () => {
    navigate("/createppt");
  };

  return (
    <div className="PptDashboard">
      <div className="pptSidebar"></div>
      <div className="pptTemplate">
        <div className="pptNav">
          <div>Recently edited</div>
          <button onClick={handlePptClick}>Create</button>
        </div>
        <div className="pptCard">
          {contentTemplates.map((tempCard,index) => (
            <div className="ptcard" key={index}>
              <div className="card-image">
                <img src={tempCard.img} alt="" />
              </div>
              <div className="card-name">{tempCard.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
