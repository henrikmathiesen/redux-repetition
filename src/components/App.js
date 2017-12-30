import React from 'react';

import './App.css';
import Header from './header/Header';

const App = () => (
  <div className="App">
    <Header />
    <main className="App-main">
      <p className="App-main__intro">
        Here we explore Redux, following along <a href="https://www.youtube.com/watch?v=DiLVAXlVYR0&list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a">React JS / Redux Tutorial - thenewboston</a>
      </p>
      <h2>Users List</h2>
      <hr />
      <h2>User Details</h2>
    </main>
  </div>
);

export default App;
