import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      statusButton: true,
      nameInput: '',
      loading: false,
      authentication: false,
    };
  }

  statusButtonFunction = (event) => {
    const minNumber = 3;
    this.setState({
      statusButton: event.target.value.length < minNumber,
      nameInput: event.target.value,
    });
  }

  handleClick = async () => {
    const { nameInput } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({
      name: nameInput,
    });
    this.setState({
      loading: false,
      authentication: true,
    });
  }

  render() {
    const { statusButton, loading, authentication } = this.state;
    if (loading) {
      return <Loading />;
    }
    if (authentication) {
      return (
        <Redirect to="/search" />
      );
    }
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="login-name-input">
            Name:
            <input
              type="text"
              data-testid="login-name-input"
              onChange={ this.statusButtonFunction }
            />
          </label>
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ statusButton }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
