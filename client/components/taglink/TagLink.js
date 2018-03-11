import React from 'react';

export class TagLink extends React.Component {

  filterTag = (event, link) => {
    this.props.filterHandler(link);
  }

  render () {
    return(
      <ul className="tag-links">
        {
          this.props.links.map((link, i) => {
            return <li key={i} className="tag-links-item" onClick={event => this.filterTag(event, link)}><a>{link}</a></li>
          })
        }
      </ul>
    );
  }
};
