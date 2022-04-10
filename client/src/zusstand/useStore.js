import create from "zustand";

export const useStore = create(() => ({
  symptom: "default",
  factor: "default",
  cause: "default",
}));
