import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import userService from "../../Services/userService";

const Navbar = props => {
  const conditionalUIMenu = userService.getUser() ? (
    <>
      <li>
        <Link to="/salon">Salons</Link>
      </li>
      <li>
        <Link to="/schedule">Schedule</Link>
      </li>
      <li>
        <Link to="/" onClick={props.handleLogout}>
          Logout
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className={styles.navbar} sticky="top">
      <div>
        <Link to="/">
          <h1>Trimer</h1>
        </Link>
      </div>
      <ul>{conditionalUIMenu}</ul>
    </div>
  );
};

export default Navbar;
