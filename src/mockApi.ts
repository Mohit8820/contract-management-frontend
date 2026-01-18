import { Contract } from "./types";
import { Blueprint } from "./types";

let contracts: Contract[] = [
  {
    id: "1",
    name: "ABC contract",
    blueprintName: "ABC Template",
    status: "CREATED",
    fields: [
      { id: "1", type: "TEXT", label: "Employee Name", value: "" },
      { id: "1", type: "CHECKBOX", label: "NDA Accepted", value: false },
    ],
  },
  {
    id: "2",
    name: "PQR contract",
    blueprintName: "PQR Template",
    status: "CREATED",
    fields: [
      { id: "1", type: "TEXT", label: "Employee Name", value: "" },
      { id: "1", type: "CHECKBOX", label: "NDA Accepted", value: false },
    ],
  },
];

const transitions: any = {
  CREATED: ["APPROVED", "REVOKED"],
  APPROVED: ["SENT"],
  SENT: ["SIGNED", "REVOKED"],
  SIGNED: ["LOCKED"],
  LOCKED: [],
  REVOKED: [],
};

export const api = {
  getContracts: async () => {
    return [...contracts];
  },

  getContract: async (id: string) => {
    console.log(id);
    return contracts.find((c) => c.id === id) ?? null;
  },

  updateContractStatus: async (id: string, status: string) => {
    const c = contracts.find((c) => c.id === id)!;
    if (!transitions[c.status].includes(status)) {
      throw new Error("Invalid transition");
    }
    c.status = status;
    return c;
  },

  updateContractFields: async (id: string, fields: any[]) => {
    const c = contracts.find((c) => c.id === id)!;
    if (["LOCKED", "REVOKED"].includes(c.status)) {
      throw new Error("Contract immutable");
    }
    c.fields = fields;
    return c;
  },
  createContractFromBlueprint: async (
    blueprint: Blueprint,
    contractName: string
  ) => {
    const contract: Contract = {
      id: Date.now().toString(),
      name: contractName,
      blueprintName: blueprint.name,
      status: "CREATED",
      fields: blueprint.fields.map((f) => ({
        ...f,
        value: "",
      })),
    };

    contracts.push(contract);
    return contract;
  },
};
