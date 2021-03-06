import React from 'react';
import { TagLink } from './../taglink/TagLink';
import { Segment } from '../segment/Segment';

export class Newslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      page: 1,
      newsData: [],
      expandedNewsId: null
    }
  }

  componentDidMount() {
    if(typeof this.props.match.params.Tag == "string"){
      this.setState({
        tag: this.props.match.params.Tag
      }, () => {
        this.requestTagNews()
      });
    } else {
      console.log("I am here today");
      this.requestTagNews()
    }
  }

  requestNews () {
    const urlForNews = 'http://localhost:3000/api/';
    let queryString = '?';

    if (this.state.tag) {
      queryString = `${queryString}tag=${this.state.tag}&`;
    }
    if (this.state.page) {
      queryString = `${queryString}page=${this.state.page}`;
    }

    fetch(`${urlForNews}${queryString}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          newsData: [...this.state.newsData, ...responseJson]
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  requestTagNews() {
    const urlForNews = 'http://localhost:3000/api/';
    let queryString = '';

    if (this.state.tag) {
      queryString = `?tag=${this.state.tag}`;
    }

    fetch(`${urlForNews}${queryString}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          newsData: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  readMore = (event, newsId) => {
    this.setState({
      expandedNewsId: newsId
    });
  }

  readMore = (event, newsId) => {
    this.setState({
      expandedNewsId: newsId
    });
  }

  loadMore = (event) => {
    event.preventDefault();
    this.setState({
      page: +this.state.page + 1
    }, () => {
      this.requestNews()
    });
  }

  filterTag = (tagName) => {
    this.props.history.push('/'+tagName);
    this.setState({
      tag: tagName
    }, () => {
      this.requestTagNews()
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
            <TagLink links={newsDetails.tags} filterHandler={this.filterTag} />
            {
              newsDetails.content.length > 150 && newsDetails.id != this.state.expandedNewsId
              ? <p>{newsDetails.content.slice(0, 150)}...<a onClick={event => this.readMore(event, newsDetails.id)}>read more</a></p>
              : <p>{newsDetails.content}</p>
            }
          </div>
        </section>
      );
    });

    return (
      <main className="main">
        <Segment filterHandler={this.filterTag} currentTag={this.state.tag} />
        {
          this.state.newsData.length
          ? <div>
              {newsInList}
              <a className="button load-more" onClick={this.loadMore}>Load more</a>
            </div>
          : <p>Loading...</p>
        }
      </main>
    );
  }
}
