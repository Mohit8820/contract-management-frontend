import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { Contract } from "../types";
import { StatusActions } from "../components/StatusActions";
import { FieldRenderer } from "../components/FieldRenderer";
import { StatusTimeline } from "../components/StatusTimeline";

export const ContractDetail = () => {
  const { contractId } = useParams();
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    if (!contractId) return;

    api.getContract(contractId).then(setContract);
  }, [contractId]);

  if (!contract) return <div>Contract not found</div>;

  const save = async () => {
    const updated = await api.updateContractFields(
      contract.id,
      contract.fields
    );
    setContract({ ...updated });
    alert("Saved");
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>{contract.name}</h2>
      <div className="flex-layout">
        <div>
          {contract.fields.map((f, i) => (
            <FieldRenderer
              key={i}
              field={f}
              disabled={["LOCKED", "REVOKED"].includes(contract.status)}
              onChange={(val) => {
                const copy = [...contract.fields];
                copy[i].value = val;
                setContract({ ...contract, fields: copy });
              }}
            />
          ))}

          <br />
          <button
            onClick={save}
            disabled={["LOCKED", "REVOKED"].includes(contract.status)}
          >
            Save Fields
          </button>
        </div>
        <div>
          <StatusTimeline current={contract.status} />
          <StatusActions contract={contract} onUpdate={setContract} />
        </div>
      </div>
    </div>
  );
};
