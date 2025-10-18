import React from "react";

const InfoCard = ({ icon, title }) => {
  return (
    <div className="info-card">
      <img src={icon} alt={title} className="info-icon" />
      <h3>{title}</h3>
    </div>
  );
};

export default InfoCard;
