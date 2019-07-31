import React, { Component } from 'react';

// Style
import './styles.css';

// Page Components
import Menu from '../../components/Menu';
import BookInformation from '../../components/BookInformation';

export default class BookDetails extends Component{
  // Before Display
  componentDidMount(){
    // Change page title
    document.title = 'Book Information';
  }
  
  // Display
  render(){
    return(
      <>
        <Menu />
        <BookInformation id={this.props.match.params.id} />
      </>
    )
  }
}