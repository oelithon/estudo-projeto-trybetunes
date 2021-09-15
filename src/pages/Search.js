import React, { Component } from 'react';
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
      loading: false,
    });
  }

  render() {
    const { statusButton, inputValue, loading, artistName } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
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
        {loading
          ? <Loading />
          : (
            <p>
              Resultado de álbuns de:
              {' '}
              {artistName}
            </p>
          ) }
      </div>
    );
  }
}

export default Search;
