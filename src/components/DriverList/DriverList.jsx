import React, { useState } from "react";
import "./DriverList.css";
import { EyeOff } from "lucide-react";


const DRIVERS = [
  { id: 1, name: "Guy Hawkins", email: "tim.jennings@example.com" },
  { id: 2, name: "Guy Hawkins", email: "tim.jennings@example.com" },
  { id: 3, name: "Guy Hawkins", email: "tim.jennings@example.com" },
  { id: 4, name: "Guy Hawkins", email: "tim.jennings@example.com" },
  { id: 5, name: "Guy Hawkins", email: "tim.jennings@example.com" },
  { id: 6, name: "Guy Hawkins", email: "tim.jennings@example.com" },
];

function DriverList() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>List of Driver</h3>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "active" ? "tab active" : "tab"}
          onClick={() => setActiveTab("active")}
        >
          Active
        </button>
        <button
          className={activeTab === "inactive" ? "tab active" : "tab"}
          onClick={() => setActiveTab("inactive")}
        >
          Unactive
        </button>
         <a href="#!" className="view-all">
          View All
        </a>
      </div>
      <div className="table-scroll">
        <table className="driver-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {DRIVERS.map((driver) => (
              <tr key={driver.id}>
                <td>{driver.name}</td>
                <td className="email-cell">{driver.email}</td>
                <td className="password-cell">
                  <span className="lock-icon"><EyeOff size={12} /></span>
                  <span className="dots">******</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DriverList;
