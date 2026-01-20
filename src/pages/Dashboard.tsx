import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { Contract } from "../types";
import TableComponent from "../components/TableComponent";

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
      <TableComponent
        heading={["Name", "Blueprint", "Status", "Created Date", "View"]}
      >
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
      </TableComponent>
    </div>
  );
};
