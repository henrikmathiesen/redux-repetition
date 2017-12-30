import React from 'react';

import './App.css';
import Header from './header/Header';
import UsersList from './users-list/Users-list';
import UserDetail from './user-details/User-details';

const App = () => (
  <div className="App">
    <Header />
    <main className="App-main">
      <p className="App-main__intro">
        Here we explore Redux, following along <a href="https://www.youtube.com/watch?v=DiLVAXlVYR0&list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a">React JS / Redux Tutorial - thenewboston</a>
      </p>
      <UsersList />
      <UserDetail />
    </main>
  </div>
);

export default App;
