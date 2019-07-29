import React, { Component } from 'react';

// Page style
import './styles.css';

export default class Home extends Component{
  // Before component render
  componentDidMount(){
    // Set page title
    document.title = "Home"
  }

  // Display
  render(){
    return(
      <div id="Home">
        <h1>asdasd3</h1>
      </div>
    );
  }
}
