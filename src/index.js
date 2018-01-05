import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import validate from 'validate';

import './index.css';
import allReducers from './reducers/all-reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
