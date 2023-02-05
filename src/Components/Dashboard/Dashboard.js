import React, { useContext, useEffect, useState } from "react";
import { contentServicesWithColor } from "../../utils/contentConstants";
import "./dashboard.css";
import DashboardCard from "./modules/DashboardCard";
import DashboardSideNav from "./modules/DashboardSideNav";
import Logo from "../../Images/CompanyLogo.png";
import Search from "../../Images/search.png";
import DashboardCardModal from "./modules/DashboardCardModal";
import ProjectPage from "../ProjectPage/ProjectPage";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const handleActiveNav = (nav) => {
    setActiveNav(nav);
  };
  const dashboardClickHandle = (isActive) => {
    if (isUserLoggedIn) {
      setIsModalActive(isActive);
    } else {
      navigate("/login");
    }
  };
  const selectedDashboardCard = (selectedCard) => setSelectedCard(selectedCard);
  const handleModalSubmit = (value, selectedCard) => {
    handleActiveNav(2);
    setSelectedCard(selectedCard);
    // const currentPath = location.pathname;
    // const newPath = `${currentPath}/home/${selectedCard.name}=${value}`;
    // navigate(newPath);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
        setUserDetails(user);
      }
    });
  }, []);

  useEffect(() => {
    setSearch("");
  }, [activeNav]);

  return (
    <div className="dashboard">
      <DashboardSideNav activeNav={activeNav} activeNavProp={handleActiveNav} />
      <div className="dashboardCardWrapper">
        <div>
          {activeNav != 0 ? (
            <div className="dashboardTopNavSearch">
              <div>
                <div>
                  <img src={Search} alt="" />
                </div>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="tools"
                  type="text"
                  value={search}
                />
              </div>
              <div>Search</div>
            </div>
          ) : null}
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
        {activeNav === 2 && (
          <div>
            <ProjectPage
              userDetails={userDetails}
              selectedCard={selectedCard}
            />
          </div>
        )}
        {isModalActive && (
          <DashboardCardModal
            userDetails={userDetails}
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
