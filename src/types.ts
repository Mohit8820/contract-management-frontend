export type ContractField = {
  id: string;
  type: FieldType;
  label: string;
  value: any;
};

export type Contract = {
  id: string;
  name: string;
  blueprintName: string;
  status: string;
  createdDate: Date;
  fields: ContractField[];
};

export type BlueprintField = {
  id: string;
  type: FieldType;
  label: string;
  position: { x: number; y: number };
};

export type Blueprint = {
  id: string;
  name: string;
  fields: BlueprintField[];
};

export type UserRole = "APPROVER" | "SIGNER";

export type FieldType = "TEXT" | "DATE" | "SIGNATURE" | "CHECKBOX";
