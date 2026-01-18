import { api } from "../api";
import { Contract } from "../types";

const role = "SIGNER"; // change to SIGNER

const rolePermissions: any = {
  APPROVER: ["APPROVED", "SENT", "REVOKED"],
  SIGNER: ["SIGNED"],
};

const transitions: any = {
  CREATED: ["APPROVED", "REVOKED"],
  APPROVED: ["SENT"],
  SENT: ["SIGNED", "REVOKED"],
  SIGNED: ["LOCKED"],
};

export const StatusActions = ({
  contract,
  onUpdate,
}: {
  contract: Contract;
  onUpdate: (c: Contract) => void;
}) => {
  const allowed = (transitions[contract.status] || []).filter((s: string) =>
    rolePermissions[role]?.includes(s)
  );

  const changeStatus = async (status: string) => {
    const updated = await api.updateContractStatus(contract.id, status);
    onUpdate({ ...updated });
  };

  return (
    <>
      <h3>Actions</h3>
      {allowed.map((s: string) => (
        <button key={s} onClick={() => changeStatus(s)}>
          {s}
        </button>
      ))}
    </>
  );
};
