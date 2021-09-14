import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <p>TrybeTunes</p>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
