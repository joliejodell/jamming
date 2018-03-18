import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

const track = {
  name: 'When She Loved Me',
  artist: 'Sarah McLachlan',
  album: 'Toy Story 2 Soundtrack'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [track, track, track, track, track],
      playlistName : 'Default',
      playlistTracks : []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track){
  if(!this.state.playlistTracks.find(t=>t.id === track.id)){const newState = this.state.playlistTracks.slice(); newState.push(track);
    this.setState({playlistTracks:newState})}
  };
  removeTrack(track){
  if(this.state.playlistTracks.find(t=>t.id === track.id)){const newState = this.state.playlistTracks.slice(); newState.splice(track);
    this.setState({playlistTracks:newState})}
  };
  updatePlaylistName(name){
  this.setState = ({playlistName: name});
  };
  //savePlaylist{
//    trackURIs = playlistTracks[];
//  };

  render() {
    console.log("the searchResults state from app.js", this.state.searchResults);
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>
            <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks} onRemove = {this.removeTrack} onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
