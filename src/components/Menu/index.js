import React, { Component } from 'react';

// Component styles
import './styles.css';

// Logo
import ReactLogo from '../../logo.svg';

export default class Menu extends Component {
  // Display
  render() {
    return(
      <div id="mainMenu">
        <img src={ReactLogo} alt="logo" />
        <span>React Bookshelf</span>
      </div>
    );
  }
}