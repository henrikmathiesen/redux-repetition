import React from 'react';

import './Header.css';
import logo from './logo.svg';

const Header = () => (
    <header className="App-header">
        <img src={logo} className="App-header__logo" alt="logo" />
        <h1 className="App-header__title">Welcome to Redux</h1>
    </header>
);

export default Header;
