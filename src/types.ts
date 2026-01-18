export type ContractField = {
  id: string;
  type: "TEXT" | "DATE" | "SIGNATURE" | "CHECKBOX";
  label: string;
  value: any;
};

export type Contract = {
  id: string;
  name: string;
  blueprintName: string;
  status: string;
  fields: ContractField[];
};

export type BlueprintField = {
  id: string;
  type: "TEXT" | "DATE" | "SIGNATURE" | "CHECKBOX";
  label: string;
  position: { x: number; y: number };
};

export type Blueprint = {
  id: string;
  name: string;
  fields: BlueprintField[];
};

export type UserRole = "APPROVER" | "SIGNER";
