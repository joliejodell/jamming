import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';


class SearchResults extends Component {

  render() {
    console.log("the searchResults props in searchresults.js passed down from app.js", this.props.searchResults);

    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks = {this.props.searchResults} onAdd = {this.props.onAdd}/>
      </div>
    );
  }
}

export default SearchResults;
