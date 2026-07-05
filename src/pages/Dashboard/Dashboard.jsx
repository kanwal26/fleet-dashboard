import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatCard from "../../components/StatCard/StatCard";
import DriverList from "../../components/DriverList/DriverList";
import ClientList from "../../components/ClientList/ClientList";
import { Phone, Award, TrendingUp, Pencil } from "lucide-react";

function Dashboard({ onLogout }) {
  const stats = [
  { label: "Total Call", value: "1,245", icon: <Phone size={18} /> },
  { label: "Total Rems", value: "970", icon: <Award size={18} /> },
  { label: "Total RPM", value: "2.5M", icon: <TrendingUp size={18} /> },
  { label: "Total PRI", value: "450", icon: <Pencil size={18} /> },
];

  return (
    <div className="dashboard-layout">
      <Sidebar activeItem="overview" onLogout={onLogout} />

      <main className="dashboard-main">
        
          <div className="topbar-actions">
            <button className="btn btn-outline">+ Add Client</button>
            <button className="btn btn-primary">+ Add Driver</button>
          </div>
       
<header className="dashboard-topbar">
          <h1>Dashboard Overview</h1>
        </header>
        <section className="stat-grid">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </section>

        <section className="lists-grid">
          <DriverList />
          <ClientList />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
