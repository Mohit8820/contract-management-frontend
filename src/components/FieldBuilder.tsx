import { FieldType } from "../types";
import { BlueprintField } from "../types";
import { Dispatch, SetStateAction } from "react";

import TableComponent from "./TableComponent";

export const FieldBuilder = ({
  fields,
  setFields,
  viewOnly,
}: {
  fields: BlueprintField[];
  setFields: Dispatch<SetStateAction<BlueprintField[]>>;
  viewOnly: Boolean | null;
}) => {
  const addField = () => {
    setFields([
      ...fields,
      {
        id: String(Math.random),
        type: "TEXT",
        label: "",
        position: { x: 1, y: fields.length + 1 },
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
      <TableComponent
        heading={[
          "Field Type",
          "Label",
          "Row Position",
          "Column Position",
          viewOnly == false ? "Remove" : "",
        ]}
      >
        {fields.map((field, i) => (
          <tr key={i}>
            <td>
              <select
                value={field.type}
                onChange={(e) =>
                  update(i, { ...field, type: e.target.value as FieldType })
                }
                disabled={viewOnly === true}
              >
                <option value="TEXT">Text</option>
                <option value="DATE">Date</option>
                <option value="SIGNATURE">Signature</option>
                <option value="CHECKBOX">Checkbox</option>
              </select>
            </td>
            <td>
              <input
                placeholder="Label"
                value={field.label}
                onChange={(e) => update(i, { ...field, label: e.target.value })}
                disabled={viewOnly === true}
              />
            </td>
            <td>
              <input
                placeholder="Row"
                type="number"
                min={1}
                value={field.position.y}
                style={{ width: "3rem" }}
                onChange={(e) =>
                  update(i, {
                    ...field,
                    position: {
                      ...field.position,
                      y: Number(e.target.value),
                    },
                  })
                }
                disabled={viewOnly === true}
              />
            </td>
            <td>
              <input
                placeholder="Column"
                type="number"
                min={1}
                max={3}
                style={{ width: "3rem" }}
                value={field.position.x}
                onChange={(e) =>
                  update(i, {
                    ...field,
                    position: {
                      ...field.position,
                      x: Number(e.target.value),
                    },
                  })
                }
                disabled={viewOnly === true}
              />
            </td>
            <td>
              {viewOnly === false && (
                <button onClick={() => remove(i)}>X</button>
              )}
            </td>
          </tr>
        ))}
      </TableComponent>
      {viewOnly == false && <button onClick={addField}>Add Field</button>}
    </div>
  );
};
