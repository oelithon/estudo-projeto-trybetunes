import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();

    this.state = ({
      statusButton: true,
    });
  }

  statusButtonFunction = (event) => {
    const minNumber = 2;
    this.setState({
      statusButton: event.target.value.length < minNumber,
    });
  }

  render() {
    const { statusButton } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search-artist-input">
            <input
              type="text"
              data-testid="search-artist-input"
              onChange={ this.statusButtonFunction }
            />
          </label>
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ statusButton }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
