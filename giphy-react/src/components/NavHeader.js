import classes from "./NavHeader.module.css";
import Logo from "./Logo";
import Search from "./Search";
import { NavLink, Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
const NavHeader = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.linkContainer}>
        <Logo />
        <NavLink className={classes.navItem} to="/category/reactions">
          Reactions
        </NavLink>
        <NavLink className={classes.navItem} to="/category/entertainment">
          Entertainment
        </NavLink>
        <NavLink className={classes.navItem} to="/category/sports">
          Sports
        </NavLink>
        <NavLink className={classes.navItem} to="/category/stickers">
          Stickers
        </NavLink>
        <NavLink className={classes.navItem} to="/category/artists">
          Artists
        </NavLink>
        <Link to="/upload" className={classes.navAnchor}>
          Upload
        </Link>
        <Link to="#" className={classes.navAnchor}>
          Create
        </Link>
        <div className={classes.user__container}>
          <div>
            <PersonIcon className={classes.icon} />
          </div>

          <Link className={classes.login} to="/login">
            Login
          </Link>
        </div>
      </div>

      <div className={classes.searchContainer}></div>

      <Search />
    </div>
  );
};

export default NavHeader;
