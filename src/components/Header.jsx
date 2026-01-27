import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { HamburgerMenu } from "./Hamburger";
export const Header = () => {
  const preferenceColors = window.matchMedia(
    "prefers-color-scheme: dark",
  ).matches;

  const [theme, setTheme] = useState(preferenceColors ? "dark" : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <header className="bg-linear-to-r from-orange-500  to-orange-400 p-1  text-white flex  items-center gap-2 justify-between sticky top-0 z-10">
      <HamburgerMenu />
      <div className="flex gap-2 items-center justify-center">
        <Icon icon="uil:cart" width="30" height="30" />
        <h1 className="sm:text-2xl font-bold">Eccomerce Store</h1>
      </div>
      <button onClick={handleTheme}>
        {theme === "light" ? (
          <Icon
            icon="line-md:moon-simple-filled"
            width="24"
            height="24"
            className="hover:bg-zinc-950 rounded-full w-10 h-10 p-1 cursor-pointer hover:text-orange-500 transform transition-all duration-300 "
          />
        ) : (
          <Icon
            icon="line-md:sunny-filled"
            width="24"
            height="24"
            className="hover:bg-white rounded-full w-10 h-10 p-1 cursor-pointer hover:text-orange-500 transform transition-all duration-300 "
          />
        )}
      </button>
    </header>
  );
};
