import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { Contract } from "../types";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    api.getContracts().then(setContracts);
  }, []);

  console.log(contracts);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div>
      <h2>Dashboard</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blueprint</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.blueprintName}</td>
              <td>{c.status}</td>
              <td>{formatDate(new Date(c.createdDate))}</td>
              <td>
                <button onClick={() => navigate(`/contracts/${c.id}`)}>
                  Open
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
