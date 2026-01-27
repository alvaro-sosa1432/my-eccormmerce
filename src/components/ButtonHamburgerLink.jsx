import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const ButtonHamburgerLink = ({ to, icon, title }) => {
  return (
    <Link
      to={`${to}`}
      className="flex  justify-start gap-2 hover:bg-white hover:text-orange-400 w-9/12 rounded-lg m-2 transition-colors duration-300 p-2 "
    >
      <Icon icon={icon} width="24" height="24" />
      <h2 className="font-semibold">{title}</h2>
    </Link>
  );
};
