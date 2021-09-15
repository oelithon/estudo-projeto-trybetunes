import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.getUserName();
  }

  getUserName = async () => {
    this.setState({
      loading: true,
    });
    const getFunctionAPI = await getUser();
    console.log(getFunctionAPI);
    this.setState({
      userName: getFunctionAPI.name,
    });
    this.setState({
      loading: false,
    });
  }

  render() {
    const { userName, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">{ userName }</p>
      </header>
    );
  }
}

export default Header;
