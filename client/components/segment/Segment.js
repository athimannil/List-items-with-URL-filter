import React from 'react';

export class Segment extends React.Component {

  filterTag = (event) => {
    this.props.filterHandler(event.target.value);
  }

  render() {
    const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"];
    const SegmentButton = tags.map((tag, i) => {
      return (
        <div key={i}>
          <input
            type="radio"
            id={`tag-${i + 1}`}
            name="tag"
            value={tag}
            onChange={this.filterTag}
            checked={ tag == this.props.currentTag}
          />
        <label className="segment-button" htmlFor={`tag-${i + 1}`}>
            {tag}
          </label>
        </div>
      );
    });

    return <div className="segment"> {SegmentButton} </div>;
  }
}
