import { useState, useEffect } from "react";
import { api } from "../api";
import { Contract, UserRole } from "../types";

const rolePermissions: any = {
  APPROVER: ["APPROVED", "SENT", "REVOKED", "LOCKED"],
  SIGNER: ["SIGNED"],
};

const transitions: any = {
  CREATED: ["APPROVED", "REVOKED"],
  APPROVED: ["SENT"],
  SENT: ["SIGNED", "REVOKED"],
  SIGNED: ["LOCKED"],
};

const actionDisplayMap: any = {
  CREATED: "Create",
  APPROVED: "Approve",
  SENT: "Send",
  SIGNED: "Sign",
  LOCKED: "Lock",
  REVOKED: "Revoke",
};

export const StatusActions = ({
  contract,
  onUpdate,
}: {
  contract: Contract;
  onUpdate: (c: Contract) => void;
}) => {
  const [role, setRole] = useState<UserRole>("APPROVER");

  useEffect(() => {
    const savedRole = sessionStorage.getItem("role") as UserRole | null;
    if (savedRole) {
      setRole(savedRole);
    } else {
      const input = window
        .prompt("Enter your role: APPROVER or SIGNER")
        ?.toUpperCase();

      if (input === "APPROVER" || input === "SIGNER") {
        sessionStorage.setItem("role", input);
        setRole(input);
      }
    }
  }, []);

  const allowed = (transitions[contract.status] || []).filter((s: string) =>
    rolePermissions[role]?.includes(s)
  );
  //console.log("allowed actions", allowed);

  const changeStatus = async (status: string) => {
    const updated = await api.updateContractStatus(contract.id, status);
    onUpdate({ ...updated });
  };

  return (
    <>
      <h3>Actions</h3>
      {allowed.length === 0 && <p>No actions allowed for {role}</p>}
      {allowed.map((s: string) => (
        <button key={s} onClick={() => changeStatus(s)}>
          {actionDisplayMap[s]}
        </button>
      ))}
    </>
  );
};
