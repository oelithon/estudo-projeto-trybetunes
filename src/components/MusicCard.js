import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      favoriteSongs: [],
    };
  }

  componentDidMount() {
    this.getAPIFavoriteSongs();
  }

  componentDidUpdate() {
    this.getAPIFavoriteSongs();
  }

  getAPIFavoriteSongs = async () => {
    const getAPI = await getFavoriteSongs();
    this.setState({
      favoriteSongs: getAPI,
    });
  }

  handleChange = async () => {
    this.setState({ loading: true });
    const { dataMusic } = this.props;
    await addSong(dataMusic);
    this.setState({ loading: false });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, favoriteSongs } = this.state;
    return (
      <div>
        { loading
          ? <Loading />
          : (
            <section>
              <p>{ trackName }</p>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                <code>audio</code>
              </audio>
              <label
                htmlFor="favorite-song"
              >
                Favorita
                <input
                  type="checkbox"
                  id="favorite-song"
                  data-testid={ `checkbox-music-${trackId}` }
                  checked={ favoriteSongs.some((track) => track.trackId === trackId) }
                  onChange={ this.handleChange }
                />
              </label>
            </section>) }
      </div>
    );
  }
}

MusicCard.propTypes = {
  dataMusic: PropTypes.object,
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.number,
}.isRequired;

export default MusicCard;
