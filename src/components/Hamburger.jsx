import { useState } from "react";
import { Icon } from "@iconify/react";
import { ButtonHamburgerLink } from "./ButtonHamburgerLink";

export const HamburgerMenu = () => {
  const links = [
    {
      to: "/",
      icon: "bxs:home",
      title: "Home",
    },
    {
      to: "/productlist",
      icon: "fluent-mdl2:product-list",
      title: "Product List",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-white   ">
      <button
        onClick={toggleMenu}
        className="p-4 focus:outline-none "
        aria-label="Menú principal"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex items-center ">
          <div className="">
            {isOpen ? (
              <Icon
                className="cursor-pointer text-white p-2  rounded-full transition-all duration-300 "
                icon="maki:cross"
                width="40"
                height="40"
              />
            ) : (
              <Icon
                className="cursor-pointer text-white p-2   rounded-full transition-colors duration-300 "
                icon="line-md:menu"
                width="40"
                height="40"
              />
            )}
          </div>
        </div>
      </button>

      {/* Menú desplegable */}
      <div
        className={`absolute  -left-2 right-0 w-screen  h-screen min-[350px]:w-62  bg-linear-to-r from-orange-500 to-orange-400   shadow-lg  z-50 transition-all duration-300 ease-in-out  ${
          isOpen
            ? "opacity-100 visible transform translate-x-0"
            : "opacity-0 invisible transform -translate-x-2"
        }`}
      >
        <div className="w-76">
          <div className="flex flex-col justify-center items-start   ">
            {links.map((link, index) => (
              <ButtonHamburgerLink
                key={index}
                to={link.to}
                icon={link.icon}
                title={link.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Overlay para cerrar al hacer clic fuera del menú */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40  bg-opacity-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};
