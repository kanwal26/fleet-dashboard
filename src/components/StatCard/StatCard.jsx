import React from "react";
import "./StatCard.css";


function StatCard({ label, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card-text">
        <p className="stat-card-label">{label}</p>
        <p className="stat-card-value">{value}</p>
      </div>
      <div className="stat-card-icon">{icon}</div>
    </div>
  );
}

export default StatCard;
