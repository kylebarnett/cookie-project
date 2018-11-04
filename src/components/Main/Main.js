import React, { Component } from 'react';
import Header from '../Header/Header';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        Main
      </div>
    );
  }
}

export default Main;