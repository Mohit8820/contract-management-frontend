import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Blueprint } from "../types";
import { BlueprintForm } from "../components/BlueprintForm";
import { api } from "../api";

export const Blueprints = () => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [editing, setEditing] = useState<Blueprint | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    api.getBlueprints().then(setBlueprints);
  }, []);

  const save = async (data: Omit<Blueprint, "id">) => {
    if (editing) {
      const updated = await api.updateBlueprint(editing.id, data);

      setBlueprints((prev) =>
        prev.map((b) => (b.id === updated.id ? updated : b))
      );

      setEditing(null);
    } else {
      const created = await api.createBlueprint(data);
      setBlueprints((prev) => [...prev, created]);
    }
  };

  const createContract = async (bp: Blueprint) => {
    const name = prompt("Enter contract name");
    if (!name) return;

    const contract = await api.createContractFromBlueprint(bp.id, name);
    navigate(`/contracts/${contract.id}`);
  };

  return (
    <div>
      <h2>Blueprints</h2>

      <ul>
        {blueprints.map((bp) => {
          console.log(bp);
          return (
            <li key={bp.id}>
              <strong>{bp.name}</strong> ({bp.fields.length} fields)
              <button onClick={() => setEditing(bp)}>Edit</button>
              <button onClick={() => createContract(bp)}>
                Create Contract
              </button>
            </li>
          );
        })}
      </ul>

      <BlueprintForm
        initialData={editing}
        onSubmit={save}
        onCancel={() => setEditing(null)}
      />
    </div>
  );
};
