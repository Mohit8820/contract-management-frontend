import { Blueprint } from "../types";
import { useState, useEffect } from "react";

import { FieldBuilder } from "./FieldBuilder";

export const BlueprintForm = ({
  initialData,
  onSubmit,
  onCancel,
  viewOnly,
}: {
  initialData: Blueprint | null;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
  viewOnly: Boolean;
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [fields, setFields] = useState(initialData?.fields || []);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setFields(initialData.fields);
    } else {
      setName("");
      setFields([]);
    }
  }, [initialData]);

  return (
    <div>
      <h3>{initialData ? "Edit Blueprint" : "Create Blueprint"}</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Blueprint name"
      />

      <FieldBuilder fields={fields} setFields={setFields} viewOnly={viewOnly} />
      {!viewOnly && (
        <button
          onClick={() => onSubmit({ name, fields })}
          disabled={fields.length === 0}
        >
          {initialData ? "Update" : "Create"}
        </button>
      )}

      {initialData && <button onClick={onCancel}>Cancel</button>}
    </div>
  );
};
