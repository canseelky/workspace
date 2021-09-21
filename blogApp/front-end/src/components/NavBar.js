import classes from "./Navbar.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./DropdownMenu";
import { FiArrowDown } from "react-icons/fi";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.headerTitle}>TRAVELLING THROUGH MY LENS</h1>
      <nav className={classes.nav}>
        <NavLink
          className={classes.navLink}
          exact={true}
          activeClassName={classes.navActive}
          to="/"
        >
          START HERE
        </NavLink>
        <NavLink
          className={classes.navLink}
          activeClassName={classes.navActive}
          to="/explore"
        >
          EXPLORE
          <FiArrowDown />
        </NavLink>
        {isDropdownOpen && <Dropdown />}
      </nav>
    </div>
  );
};

export default Header;
