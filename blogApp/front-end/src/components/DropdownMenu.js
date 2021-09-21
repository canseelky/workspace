import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItem";
import "./Dropdown.css";

const DropdownMenu = () => {
  const [click, setClick] = useState(false);
  const [select, setSelection] = useState();
  const toggleClickEvent = () => setClick(!click);

  return (
    <>
      <ul className="menu" className>
        {MenuItems.map((menuItem) => {
          return (
            <li className="menuItem">
              <NavLink to={menuItem.path} onClick={() => setClick(false)}>
                {menuItem.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownMenu;
