import React, { Component } from 'react';
import styles from './Header.scss';
const Header = () => {
  
    return (
      <header className={styles.component}>
        <i className="fas fa-book fa-2x"></i>
        <h1 className={styles.h1}>Online books search engine</h1>
      </header>
      
    );
}

export default Header;