import { ContractField } from "../types";

export const FieldRenderer = ({
  field,
  onChange,
  disabled,
}: {
  field: ContractField;
  onChange: (v: any) => void;
  disabled: boolean;
}) => {
  return (
    <div style={{ marginBottom: 12 }}>
      <label>{field.label}</label>
      <br />

      {/* TEXT */}
      {field.type === "TEXT" && (
        <input
          type="text"
          disabled={disabled}
          value={field.value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {/* CHECKBOX */}
      {field.type === "CHECKBOX" && (
        <input
          type="checkbox"
          disabled={disabled}
          checked={!!field.value}
          onChange={(e) => onChange(e.target.checked)}
        />
      )}

      {/* DATE */}
      {field.type === "DATE" && (
        <input
          type="date"
          disabled={disabled}
          value={field.value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {/* SIGNATURE */}
      {field.type === "SIGNATURE" && (
        <input
          type="text"
          disabled={disabled}
          placeholder="Type full name as signature"
          value={field.value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};
