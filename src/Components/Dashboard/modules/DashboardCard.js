import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboardModulesStyles/dashboardCard.css";

export default function DashboardCard({
  service,
  dashboardClickHandle,
  selectedDashboardCard,
}) {
  const navigate = useNavigate();
  const handleCardClick = (isPaid) => {
    if (isPaid) {
      navigate("/pricing");
    } else {
      dashboardClickHandle(true);
      selectedDashboardCard(service);
    }
  };

  return (
    <div
      style={{
        background: `linear-gradient(153deg, ${service.color} 0%, ${service.secondColor} 100%)`,
      }}
      className="dashboardCard"
      onClick={() => handleCardClick(service.isPaid)}
    >
      <div>{service.name}</div>
      <div>{service.description}</div>
      <div>
        <img src={service.img} alt="" />
      </div>
      <div className="isPaidContainer">
        {service.isPaid ? (
          <div>
            <img src="https://img.icons8.com/dusk/512/paid.png" alt="" />
            Locked
          </div>
        ) : (
          <div>
            <img
              src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/512/external-Poppers-disco-smashingstocks-flat-smashing-stocks.png"
              alt=""
            />
            Unlocked
          </div>
        )}
      </div>
    </div>
  );
}
