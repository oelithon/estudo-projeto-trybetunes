import React, { Component } from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      listAlbums: [],
      album: [],
    };
  }

  componentDidMount() {
    this.getMusicsAPI();
  }

  getMusicsAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const allAlbums = await getMusics(id);
    console.log(allAlbums);
    this.setState({
      listAlbums: allAlbums,
      album: allAlbums[0],
    });
  }

  render() {
    const { listAlbums, album } = this.state;
    const musicList = listAlbums.slice(1);
    const { artistName, collectionName } = album;
    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name">{artistName}</h2>
        <p data-testid="album-name">{collectionName}</p>
        <ul>
          {musicList.map((music) => <li key={ music.trackId }>{ music.trackName }</li>)}
        </ul>
      </div>
    );
  }
}

export default Album;
