import React from "react";
import { useDispatch } from "react-redux";
import { resetUsers } from "../../redux/usersSlice"; 
import classes from "./Header.module.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleHeaderClick = () => {
    dispatch(resetUsers()); 
  };

  return (
    <header className={classes.headerContainer}>
      <div className={classes.header} onClick={handleHeaderClick}>
        Search <span className={classes.orange}>&</span> Go
      </div>
    </header>
  );
};

export default Header;
