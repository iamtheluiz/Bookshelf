import React, { Component } from 'react';

// Styles
import './styles.css';

// Components
import BookItem from '../BookItem';

export default class BookList extends Component{
  // Display
  render(){
    return(
      <div id="bookList">
        <BookItem name={'A Bela Adormecida'} author={'Someone'} />
        <BookItem name={'Um Estudo em Vermelho'} author={'Someone'} />
        <BookItem name={'Javascript Eloquente'} author={'Someone'} />
        <BookItem name={'A Bela Adormecida'} author={'Someone'} />
        <BookItem name={'Um Estudo em Vermelho'} author={'Someone'} />
        <BookItem name={'Javascript Eloquente'} author={'Someone'} />
        <BookItem name={'A Bela Adormecida'} author={'Someone'} />
        <BookItem name={'Um Estudo em Vermelho'} author={'Someone'} />
        <BookItem name={'Javascript Eloquente'} author={'Someone'} />
        <BookItem name={'A Bela Adormecida'} author={'Someone'} />
        <BookItem name={'Um Estudo em Vermelho'} author={'Someone'} />
        <BookItem name={'Javascript Eloquente'} author={'Someone'} />
        <BookItem name={'A Bela Adormecida'} author={'Someone'} />
        <BookItem name={'Um Estudo em Vermelho'} author={'Someone'} />
        <BookItem name={'Javascript Eloquente'} author={'Someone'} />
        <BookItem name={'A Bela Adormecida'} author={'Someone'} />
        <BookItem name={'Um Estudo em Vermelho'} author={'Someone'} />
        <BookItem name={'Javascript Eloquente'} author={'Someone'} />
        <BookItem name={'A Bela Adormecida'} author={'Someone'} />
        <BookItem name={'Um Estudo em Vermelho'} author={'Someone'} />
        <BookItem name={'Javascript Eloquente'} author={'Someone'} />
      </div>
    );
  }
}