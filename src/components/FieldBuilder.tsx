import { FieldRow } from "./FieldRow";
import { BlueprintField } from "../types";
import { Dispatch, SetStateAction } from "react";

export const FieldBuilder = ({
  fields,
  setFields,
}: {
  fields: BlueprintField[];
  setFields: Dispatch<SetStateAction<BlueprintField[]>>;
}) => {
  const addField = () => {
    setFields([
      ...fields,
      {
        id: String(Math.random),
        type: "TEXT",
        label: "",
        position: { x: 0, y: fields.length },
      },
    ]);
  };

  const update = (index: number, updated: BlueprintField) => {
    const copy = [...fields];
    copy[index] = updated;
    setFields(copy);
  };

  const remove = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h4>Fields</h4>

      {fields.map((f, i) => (
        <FieldRow
          key={i}
          field={f}
          onChange={(v: BlueprintField) => update(i, v)}
          onRemove={() => remove(i)}
        />
      ))}

      <button onClick={addField}>Add Field</button>
    </div>
  );
};
