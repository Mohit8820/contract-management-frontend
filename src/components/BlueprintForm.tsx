import { Blueprint } from "../types";
import { useState, useEffect } from "react";

import { FieldBuilder } from "./FieldBuilder";

export const BlueprintForm = ({
  initialData,
  onSubmit,
  onCancel,
}: {
  initialData: Blueprint | null;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [fields, setFields] = useState(initialData?.fields || []);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setFields(initialData.fields);
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

      <FieldBuilder fields={fields} setFields={setFields} />

      <button onClick={() => onSubmit({ name, fields })}>
        {initialData ? "Update" : "Create"}
      </button>

      {initialData && <button onClick={onCancel}>Cancel</button>}
    </div>
  );
};
