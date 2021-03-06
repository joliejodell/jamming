import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(event) {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{!this.props.isRemoval ?
          <div onClick={this.addTrack.bind(this)}>+</div>
        : <div onClick={this.removeTrack.bind(this)}>-</div>}</a>
      </div>
    );
  }
}

export default Track;
