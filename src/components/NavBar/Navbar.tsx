import * as React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper teal darken-2">
        <a href="#top" className="brand-logo right">
          ToDo App
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="/">ToDo</a>
          </li>
          <li className="active">
            <a href="/">Exercise</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
