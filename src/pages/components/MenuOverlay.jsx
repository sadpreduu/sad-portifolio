import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  // Verifique se links está definido e é um array
  if (!Array.isArray(links)) {
    return null; // Ou exiba um fallback apropriado
  }

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
