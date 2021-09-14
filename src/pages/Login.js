import React, { Component } from 'react';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      statusButton: true,
      nameInput: '',
    };
  }

  statusButtonFunction = (event) => {
    const minNumber = 3;
    this.setState({
      statusButton: event.target.value.length < minNumber,
      nameInput: event.target.value,
    });
  }

  handleClick = () => {
    const { nameInput } = this.state;
    createUser({
      name: nameInput,
    });
  }

  render() {
    const { statusButton } = this.state;
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
