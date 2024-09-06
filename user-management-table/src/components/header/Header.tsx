import React from 'react';
import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <h1>Search & Go</h1>
    </header>
  );
};

export default Header;
