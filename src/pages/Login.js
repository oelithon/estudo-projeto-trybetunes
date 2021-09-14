import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="login-name-input">
            Name:
            <input type="text" data-testid="login-name-input" />
          </label>
          <button type="submit" data-testid="login-submit-button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
