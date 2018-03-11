import React from 'react';

export class TagLink extends React.Component {
  render () {
    return(
      <ul className="tag-links">
        {
          this.props.links.map((link, i) => {
            return <li key={i} className="tag-links-item"><a>{link}</a></li>
          })
        }
      </ul>
    );
  }
};
