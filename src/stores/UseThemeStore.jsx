import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const UseThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
