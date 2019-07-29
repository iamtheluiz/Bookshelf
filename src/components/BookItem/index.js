import React, { Component } from 'react';

// Styles
import './styles.css';

export default class BookItem extends Component{
  // Display
  render(){
    return(
      <div id="bookItem">
        <h3>{this.props.name}</h3>
        <span>{this.props.author}</span>
      </div>
    );
  }
}