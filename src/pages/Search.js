import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();

    this.state = ({
      statusButton: true,
      inputValue: '',
      artistName: '',
      loading: false,
      getAPI: false,
      musicList: [],
    });
  }

  statusButtonFunction = (event) => {
    const minNumber = 2;
    this.setState({
      statusButton: event.target.value.length < minNumber,
      inputValue: event.target.value,
    });
  }

  searchButton = async () => {
    const { inputValue } = this.state;
    this.setState((prevState) => ({
      artistName: prevState.inputValue,
      inputValue: '',
      loading: true,
    }));
    const getAPISearchMusic = await searchAlbumsAPI(inputValue);
    this.setState({
      musicList: getAPISearchMusic,
      getAPI: true,
      loading: false,
    });
  }

  render() {
    const { statusButton, inputValue, loading,
      artistName, musicList, getAPI } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {loading
          ? <Loading />
          : (
            <form>
              <label htmlFor="search-artist-input">
                <input
                  type="text"
                  data-testid="search-artist-input"
                  value={ inputValue }
                  onChange={ this.statusButtonFunction }
                />
              </label>
              <button
                type="button"
                data-testid="search-artist-button"
                disabled={ statusButton }
                onClick={ this.searchButton }
              >
                Pesquisar
              </button>
            </form>
          )}
        <p>
          Resultado de álbuns de:
          {' '}
          {artistName}
        </p>
        <section>
          {musicList.length === 0 && getAPI
            ? <p>Nenhum álbum foi encontrado</p>
            : (
              <ul>
                {musicList.map((album) => (
                  <Link
                    key={ album.collectionId }
                    to={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    <li>
                      {album.collectionName}
                    </li>
                  </Link>
                ))}
              </ul>)}
        </section>
      </div>
    );
  }
}

export default Search;
