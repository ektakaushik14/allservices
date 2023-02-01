import React, { useEffect, useState } from "react";
import { contentServicesWithColor } from "../../utils/contentConstants";
import "./dashboard.css";
import DashboardCard from "./modules/DashboardCard";
import DashboardSideNav from "./modules/DashboardSideNav";
import Logo from "../../Images/CompanyLogo.png";
import Search from "../../Images/search.png";
import { Box, Button, Modal, Typography } from "@mui/material";
import DashboardCardModal from "./modules/DashboardCardModal";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleActiveNav = (nav) => {
    setActiveNav(nav);
  };
  const dashboardClickHandle = (isActive) => {
    setIsModalActive(isActive);
  };
  const selectedDashboardCard = (selectedCard) => setSelectedCard(selectedCard);
  const handleModalSubmit = (value) => {
    handleActiveNav(2);
  };

  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);

  return (
    <div className="dashboard">
      <DashboardSideNav activeNavProp={handleActiveNav} />
      <div className="dashboardCardWrapper">
        <div>
          <div className="dashboardTopNavSearch">
            <div>
              <div>
                <img src={Search} alt="" />
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="tools"
                type="text"
              />
            </div>
            <div>Search</div>
          </div>
          <div className="dashboardTopNavLogo">
            <img src={Logo} alt="" />
          </div>
        </div>
        {activeNav === 1 && (
          <div className="dashboardCardContainer">
            {contentServicesWithColor
              .filter((service) =>
                service.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((service) => (
                <DashboardCard
                  service={service}
                  dashboardClickHandle={dashboardClickHandle}
                  selectedDashboardCard={selectedDashboardCard}
                />
              ))}
          </div>
        )}
        {isModalActive && (
          <DashboardCardModal
            modalSubmit={handleModalSubmit}
            isOpen={isModalActive}
            onClose={dashboardClickHandle}
            selectedCard={selectedCard}
          />
        )}
      </div>
    </div>
  );
}
