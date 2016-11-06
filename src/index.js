import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {
    Router,
    Route,
    browserHistory
} from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Provider } from 'react-redux';
//import store from './store'

ReactDOM.render(
    <Provider >
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
