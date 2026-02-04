import { Icon } from "@iconify/react";
import { HamburgerMenu } from "./Hamburger";
export const Header = () => {
  return (
    <header className="bg-linear-to-r from-orange-500  to-orange-400 p-1  text-white flex  items-center gap-2 justify-start sticky top-0 z-10">
      <HamburgerMenu />
      <div className="flex gap-2 items-center justify-center">
        <Icon icon="uil:cart" width="30" height="30" />
        <h1 className="sm:text-2xl font-bold">Eccomerce Store</h1>
      </div>
    </header>
  );
};
