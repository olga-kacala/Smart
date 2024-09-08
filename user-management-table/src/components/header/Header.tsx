import React from "react";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div>
        Search <span className={classes.orange}>&</span> Go
      </div>
    </header>
  );
};

export default Header;
