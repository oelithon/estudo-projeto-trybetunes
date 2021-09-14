import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      statusButton: true,
    };
  }

  statusButton = (event) => {
    const minNumber = 3;
    this.setState({
      statusButton: event.target.value.length < minNumber,
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
              onChange={ this.statusButton }
            />
          </label>
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ statusButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
