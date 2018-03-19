import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName : 'New Playlist',
      playlistTracks : []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track){
  if(!this.state.playlistTracks.find(t=>t.id === track.id)){const newState = this.state.playlistTracks.slice(); newState.push(track);
    this.setState({playlistTracks:newState})}
  };
  removeTrack(track){
    let newState = this.state.playlistTracks;
    newState = newState.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks:newState});
  };
  updatePlaylistName(name){
  this.setState({playlistName: name});
  };
  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri);
Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
  this.setState({
    playlistName: 'New Playlist',
    playlistTracks: []
  });
});
  };
  search(term){
    Spotify.search(term).then(searchResults => {
  this.setState({searchResults: searchResults});
});
}

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch = {this.search}/>
          <div className="App-playlist">
          <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>
            <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks} onRemove = {this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
