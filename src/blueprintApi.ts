import { Blueprint } from "./types";

let blueprints: Blueprint[] = [
  {
    id: "1",
    name: "Employment Contract",
    fields: [
      {
        id: "f1",
        type: "TEXT",
        label: "Employee Name",
        position: { x: 0, y: 0 },
      },
    ],
  },
];

export const BlueprintAPI = {
  list: async () => {
    return Promise.resolve([...blueprints]);
  },

  create: async (data: Omit<Blueprint, "id">) => {
    const newBlueprint = {
      ...data,
      id: Date.now().toString(),
    };
    blueprints.push(newBlueprint);
    return Promise.resolve(newBlueprint);
  },

  update: async (id: string, updates: Partial<Blueprint>) => {
    blueprints = blueprints.map((bp) =>
      bp.id === id ? { ...bp, ...updates } : bp
    );
    return Promise.resolve(blueprints.find((bp) => bp.id === id));
  },

  remove: async (id: string) => {
    blueprints = blueprints.filter((bp) => bp.id !== id);
    return Promise.resolve(true);
  },
};
