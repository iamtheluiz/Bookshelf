import React, { Component } from 'react';

// Styles
import './styles.css';

// Icon
import bookIcon from '../../book.svg';

export default class BookForm extends Component{
  // Add new book
  addNewBook(event){
    event.preventDefault();

    const formData = document.getElementById("bookForm").elements;

    console.log(formData);
  }

  // Display
  render(){
    return(
      <form id="bookForm" onSubmit={this.addNewBook}>
        <h1><img src={bookIcon} alt="Book Icon" /> Add a new Book </h1>
        <label>
          Name:
          <input type="text" name="bookName" required />
        </label>
        <label>
          Author:
          <input type="text" name="author" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}