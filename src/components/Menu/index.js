import React, { Component } from 'react';

// Component styles
import './styles.css';

// Logo
import ReactLogo from '../../logo.svg';

export default class Menu extends Component {

  // Redirect to home page
  goToHomePage = () => {
    window.location = '/';
  }

  // Display
  render() {
    return(
      <div id="mainMenu">
        <img onClick={this.goToHomePage} src={ReactLogo} alt="logo" />
        <span onClick={this.goToHomePage}>React Bookshelf</span>
      </div>
    );
  }
}