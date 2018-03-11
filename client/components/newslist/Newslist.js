import React from 'react';
import { TagLink } from './../taglink/TagLink';
import { Segment } from '../segment/Segment';

export class Newslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: []
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
        this.setState({
          newsData: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    const newsInList = this.state.newsData.map(newsDetails => {
      return (
        <section className="media" key={newsDetails.id}>
          {newsDetails.image && <figure className="media-figure">
             <img src={newsDetails.image} />
          </figure>}
          <div className="media-body">
            <h3 className="media-title">{newsDetails.header}</h3>
            <TagLink links={newsDetails.tags} />
            <p>{newsDetails.content}</p>
          </div>
        </section>
      );
    });

    return (
      <main className="main">
        <Segment />
        {
          this.state.newsData.length
          ? <div>{newsInList}</div>
          : <p>Loading...</p>
        }
      </main>
    );
  }
}
