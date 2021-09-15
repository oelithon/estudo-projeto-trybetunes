import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    this.getUserName();
  }

  getUserName = async () => {
    const getFunctionAPI = await getUser();
    console.log(getFunctionAPI);
    this.setState({
      userName: getFunctionAPI.name,
    });
  }

  render() {
    const { userName } = this.state;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">{ userName }</p>
      </header>
    );
  }
}

export default Header;
