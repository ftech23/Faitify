import React from "react";
import Styles from "../../Component/Nav/Nav.module.css";

const Nav = () => {
  return (
    <div className={Styles.navigation}>
      <div>
        <span>Exclusive</span>
      </div>
      <ul className={Styles.nav_ul}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Sign Up</a>
        </li>
      </ul>
      <div className={Styles.nav_search}>
        <input
          type="search"
          id="search"
          placeholder="What are you looking for?"
        />
      </div>
    </div>
  );
};

export default Nav;
