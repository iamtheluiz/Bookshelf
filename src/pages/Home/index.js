import React, { Component } from 'react';

// Page style
import './styles.css';

// Page Components
import Menu from '../../components/Menu';
import BookList from '../../components/BookList';

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
        <Menu />
        <BookList />
      </div>
    );
  }
}
