import { useEffect } from "react";
import { UseThemeStore } from "../stores/UseThemeStore";

export const useTheme = () => {
  const { theme, toggleTheme } = UseThemeStore();

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    htmlElement.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
};
