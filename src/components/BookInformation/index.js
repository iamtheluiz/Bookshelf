import React, { Component } from 'react';

// Styles
import './styles.css';

export default class BookInformation extends Component{
  constructor(props){
    super(props);

    // Set the initial state
    this.state = {
      key: null,
      name: "",
      author: "",
      cover: ""
    }
  }

  // Before Display
  componentDidMount(){
    // Get book information
    this.setState(JSON.parse(localStorage.getItem('@bookshelf/data')).books[this.props.id]);
  }

  // Display
  render(){
    return(
      <div id="bookInformation">
        <img src={this.state.cover} alt="Book Cover" />
        <div>
          <h1>{this.state.name}</h1>
          <span>{this.state.author}</span>
        </div>
      </div>
    )
  }
}