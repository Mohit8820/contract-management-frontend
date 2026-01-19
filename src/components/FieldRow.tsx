import { BlueprintField, FieldType } from "../types";

export const FieldRow = ({
  field,
  onChange,
  onRemove,
  viewOnly,
}: {
  field: BlueprintField;
  onChange: (v: BlueprintField) => void;
  onRemove: () => void;
  viewOnly: Boolean | null;
}) => {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <select
        value={field.type}
        onChange={(e) =>
          onChange({ ...field, type: e.target.value as FieldType })
        }
      >
        <option value="TEXT">Text</option>
        <option value="DATE">Date</option>
        <option value="SIGNATURE">Signature</option>
        <option value="CHECKBOX">Checkbox</option>
      </select>

      <input
        placeholder="Label"
        value={field.label}
        onChange={(e) => onChange({ ...field, label: e.target.value })}
      />

      {viewOnly == false && <button onClick={onRemove}>X</button>}
    </div>
  );
};
