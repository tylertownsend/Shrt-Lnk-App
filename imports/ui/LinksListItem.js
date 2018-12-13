import React from 'react';

export default class LinksListItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
      </div>
    );
  }
}

LinksListItems.propTypes = {
  _id : React.PropTypes.string.isRequired,
  url : React.PropTypes.string.isRequired,
  userId : React.PropTypes.string.isRequired,
  shortUrl : React.PropTypes.string.isRequired
}