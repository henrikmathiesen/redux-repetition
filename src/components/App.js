import React, { Component } from 'react';

import './App.css';
import Header from './header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <p className="App-main__intro">
            Here we explore Redux, following along <a href="https://www.youtube.com/watch?v=DiLVAXlVYR0&list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a">React JS / Redux Tutorial - thenewboston</a>
          </p>
        </main>
      </div>
    );
  }
}

export default App;
