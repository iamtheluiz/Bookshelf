import React, { Component } from 'react';
import ReactLogo from '../../logo.svg';

// Page style
import './styles.css';

export default class App extends Component{
  // Before component render
  componentDidMount(){
    // Set page title
    document.title = "Not Found!"
  }

  // Display 
  render(){
    return (
      <div id="notFound">
        <img src={ReactLogo} alt="React logo"></img>
        <h1>Error 404</h1>
        <p>This is not a page from the site!</p>
        <a href="/">Go back to Home</a>
      </div>
    );
  }
}
