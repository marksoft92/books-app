import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Books from '../Books/Books';
import styles from './App.scss';


class App extends Component {
  render() {
    return (
      <div className={styles.component}>
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;