import { Blueprint } from "./types";
import { Contract } from "./types";

const BASE_URL = "http://localhost:4000/api";

export const api = {
  //BLUEPRINT APIs (BACKEND)

  getBlueprints: async (): Promise<Blueprint[]> => {
    const res = await fetch(`${BASE_URL}/blueprints`);
    if (!res.ok) throw new Error("Failed to fetch blueprints");
    return res.json();
  },

  createBlueprint: async (data: Omit<Blueprint, "id">): Promise<Blueprint> => {
    const res = await fetch(`${BASE_URL}/blueprints`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to create blueprint");
    return res.json();
  },

  updateBlueprint: async (
    id: string,
    updates: Partial<Blueprint>
  ): Promise<Blueprint> => {
    const res = await fetch(`${BASE_URL}/blueprints/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    if (!res.ok) throw new Error("Failed to update blueprint");
    return res.json();
  },

  deleteBlueprint: async (id: string): Promise<void> => {
    const res = await fetch(`${BASE_URL}/blueprints/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete blueprint");
  },

  // CONTRACT APIs (BACKEND)

  getContracts: async (): Promise<Contract[]> => {
    const res = await fetch(`${BASE_URL}/contracts`);
    if (!res.ok) throw new Error("Failed to fetch contracts");
    return res.json();
  },

  getContract: async (id: string): Promise<Contract> => {
    const res = await fetch(`${BASE_URL}/contracts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch contract");
    return res.json();
  },

  createContractFromBlueprint: async (
    blueprintId: string,
    name: string
  ): Promise<Contract> => {
    console.log(blueprintId, name);
    const res = await fetch(`${BASE_URL}/contracts/from-blueprint`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blueprintId, name }),
    });

    if (!res.ok) throw new Error("Failed to create contract");
    return res.json();
  },

  updateContractStatus: async (
    id: string,
    status: string
  ): Promise<Contract> => {
    const res = await fetch(`${BASE_URL}/contracts/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) throw new Error("Failed to update status");
    return res.json();
  },

  updateContractFields: async (
    id: string,
    fields: any[]
  ): Promise<Contract> => {
    const res = await fetch(`${BASE_URL}/contracts/${id}/fields`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    });

    if (!res.ok) throw new Error("Failed to update fields");
    return res.json();
  },
};
