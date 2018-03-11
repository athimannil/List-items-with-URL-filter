import React from 'react';

export class Newslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: ''
    }
  }

  componentDidMount() {
    this.requestNews();
  }

  requestNews () {
    const urlForNews = 'http://localhost:3000/api/';

    fetch(urlForNews)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return <h1>I am here for the news</h1>;
  }
}
