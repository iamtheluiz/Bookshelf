import React, { Component } from 'react';

// Styles
import './styles.css';

// Components
import BookItem from '../BookItem';

export default class BookList extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: []
    };
  }

  // Before component render
  componentDidMount(){
    // Search for all books
    if(localStorage.getItem('@bookshelf/data') !== null){
      this.setState(JSON.parse(localStorage.getItem('@bookshelf/data')));
    }else{
      localStorage.setItem('@bookshelf/data', JSON.stringify(this.state));
    }
  }

  // Display
  render(){
    return(
      <div id="bookList">
        <div id="newBook">
          <a href="/add-new-book"></a>
        </div>
        {this.state.books.map((book, index) => (
          <BookItem key={`${book.key}`} id={`${book.key}`} name={`${book.name}`} author={`${book.author}`} cover={`${book.cover}`}  />
        ))}
      </div>
    );
  }
}