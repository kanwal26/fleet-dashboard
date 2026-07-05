import React from "react";
import "./ClientList.css";

const CLIENTS = [
  {
    id: 1,
    name: "Eleanor Pena",
    services: [
      { label: "SEO", type: "warning" },
      { label: "UI/UX Design", type: "danger" },
      { label: "Web Development", type: "info" },
      { label: "Consulting", type: "success" },
    ],
  },
  {
    id: 2,
    name: "Eleanor Pena",
    services: [
      { label: "SEO", type: "warning" },
      { label: "UI/UX Design", type: "danger" },
      { label: "Web Development", type: "info" },
      { label: "Consulting", type: "success" },
    ],
  },
  {
    id: 3,
    name: "Eleanor Pena",
    services: [
      { label: "SEO", type: "warning" },
      { label: "UI/UX Design", type: "danger" },
      { label: "Web Development", type: "info" },
      { label: "Consulting", type: "success" },
    ],
  },
  {
    id: 4,
    name: "Eleanor Pena",
    services: [
      { label: "SEO", type: "warning" },
      { label: "UI/UX Design", type: "danger" },
      { label: "Web Development", type: "info" },
      { label: "Consulting", type: "success" },
    ],
  },
];

function ClientList() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3>List of Clients</h3>
      </div>

      <div className="table-scroll">
        <table className="client-table">
          <thead>
            <tr>
              <th>Clients Name</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            {CLIENTS.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>
                  <div className="tag-list">
                    {client.services.map((service, index) => (
                      <span
                        key={index}
                        className={`tag tag-${service.type}`}
                      >
                        {service.label}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientList;
