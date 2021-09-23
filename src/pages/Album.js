import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      album: [],
    };
  }

  componentDidMount() {
    this.getMusicsAPI();
  }

  getMusicsAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const musicsAlbums = await getMusics(id);
    this.setState({
      songs: musicsAlbums,
      album: musicsAlbums[0],
    });
  }

  render() {
    const { songs, album } = this.state;
    const musicList = songs.slice(1);
    const { artistName, collectionName } = album;
    return (
      <div data-testid="page-album">
        <Header />
        <section>
          <h2 data-testid="artist-name">{ artistName }</h2>
          <p data-testid="album-name">{ collectionName }</p>
          <ul>
            { musicList.map((music) => (
              <MusicCard
                dataMusic={ music }
                key={ music.trackId }
                trackName={ music.trackName }
                previewUrl={ music.previewUrl }
                trackId={ music.trackId }
              />
            )) }
          </ul>
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;

export default Album;
