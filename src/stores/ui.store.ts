// src/stores/ui.store.ts
import { create } from "zustand";

type UIState = {
  sidebarOpen: boolean;
  theme: "light" | "dark";
  toggleSidebar: () => void;
  toggleTheme: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  theme: "light",

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
