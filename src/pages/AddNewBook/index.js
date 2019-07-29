import React, { Component } from 'react';

// Styles
import './styles.css';

// Components
import Menu from '../../components/Menu';
import BookForm from '../../components/BookForm';

export default class AddNewBook extends Component{
  // Before component render
  componentDidMount(){
    // Set page title
    document.title = "New Book"
  }

  // Display
  render(){
    return(
      <div id="addNewBook">
        <Menu />
        <BookForm />
      </div>
    );
  }
}