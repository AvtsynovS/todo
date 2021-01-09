import React from "react";
import styles from "./styles.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.test}>
      <div className="nav-wrapper teal darken-1">
        <a href="#top" className="brand-logo right black-text">
          ToDo App
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="sass.html">ToDo</a>
          </li>
          <li className="active">
            <a href="badges.html">Exercise</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
