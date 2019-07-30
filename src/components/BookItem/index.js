import React, { Component } from 'react';

// Styles
import './styles.css';

export default class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookCover: { backgroundImage: 'url(' + this.props.cover + ')', backgroundSize: '100% auto' },
      infoDisplay: { display: 'none' }
    };
  }

  showBookInfo = () => {
    this.setState({
      bookCover: { backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(' + this.props.cover + ')', backgroundSize: '100% auto' },
      infoDisplay: {}
    });
  }

  hideBookInfo = () => {
    this.setState({
      bookCover: { backgroundImage: 'url(' + this.props.cover + ')', backgroundSize: '100% auto' },
      infoDisplay: { display: 'none' }
    });
  }

  // Display
  render() {
    return (
      <div className="bookItem" onMouseOver={this.showBookInfo} onMouseLeave={this.hideBookInfo} style={this.state.bookCover} >
        <h3 style={this.state.infoDisplay}>{this.props.name}</h3>
        <span style={this.state.infoDisplay}>{this.props.author}</span>
      </div>
    );
  }
}