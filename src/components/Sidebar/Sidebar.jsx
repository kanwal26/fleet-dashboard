import React from "react";
import "./Sidebar.css";
import {
  LayoutDashboard,
  Truck,
  Users
} from "lucide-react";


const MENU_ITEMS = [
  { key: "overview", label: "Overview", icon: <LayoutDashboard size={15} /> },
  { key: "driver", label: "Driver", icon: <Truck size={15} /> },
  { key: "clients", label: "Clients", icon: <Users size={15} /> },
];

function Sidebar({ activeItem = "overview", onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Earnings Dashboard</div>

      <nav>
        <ul className="sidebar-menu">
          {MENU_ITEMS.map((item) => (
            <li
              key={item.key}
              className={
                item.key === activeItem
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      {onLogout && (
        <button className="sidebar-logout" onClick={onLogout}>
          Log out
        </button>
      )}
    </aside>
  );
}

export default Sidebar;
