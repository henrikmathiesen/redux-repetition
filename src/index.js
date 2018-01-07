import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import isDebugMode from 'utils/is-debug-mode';
import rootReducer from './reducers/root-reducer';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

const store = createStore(
    rootReducer, 
    isDebugMode() && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
