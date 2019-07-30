import React, { Component } from 'react';

// Styles
import './styles.css';

// Icon
import bookIcon from '../../book.svg';

export default class BookForm extends Component{
  // Add new book
  addNewBook(event){
    event.preventDefault();
    
    // Get all the books
    let state = {};
    if(localStorage.getItem('@bookshelf/data') !== null){
      state = JSON.parse(localStorage.getItem('@bookshelf/data'));
    }else{
      localStorage.setItem('@bookshelf/data', {});
      state = {
        books: []
      };
    }

    const formData = document.getElementById("bookForm").elements;
    const book = {
      key: String(state['books'].length),
      name: formData.bookName.value,
      author: formData.author.value,
      cover: formData.bookCover.value
    };

    state['books'].push(book);

    localStorage.setItem('@bookshelf/data', JSON.stringify(state));

    window.location = '/';
  }

  // Display
  render(){
    return(
      <form id="bookForm" onSubmit={this.addNewBook} autoComplete="off">
        <h1><img src={bookIcon} alt="Book Icon" /> Add a new Book </h1>
        <label>
          Name:
          <input type="text" name="bookName" required />
        </label>
        <label>
          Author:
          <input type="text" name="author" required />
        </label>
        <label>
          Book Cover image link:
          <input type="text" name="bookCover" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}