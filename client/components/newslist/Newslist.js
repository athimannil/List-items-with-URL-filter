import React from 'react';

export class Newslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: ''
    }
  }
  render() {
    return <h1>I am here for the news</h1>;
  }
}
