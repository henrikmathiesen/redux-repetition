import React from 'react';

import './App.css';
import Header from './header/Header';
import UsersList from './users-list/Users-list';
import UserDetail from './user-details/User-details';
import UserForm from './user-form/user-form';

const App = () => (
  <div className="App">
    <Header />
    <main className="App-main">
      <p className="App-main__intro">
        Here we explore Redux, following along <a href="https://www.youtube.com/watch?v=DiLVAXlVYR0&list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a">React JS / Redux Tutorial - thenewboston</a>
      </p>
      <div className="App-main__users">
        <UsersList />
        <UserDetail />
      </div>
      <div className="App-main__user-form">
        <UserForm />
      </div>
    </main>
  </div>
);

export default App;
