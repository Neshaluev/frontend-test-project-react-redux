import './style/index.css';

import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {ThemeProvider} from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import {store} from './store';
import {theme} from './style/theme';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <App />
                </LocalizationProvider>
            </ThemeProvider>
        </Provider>
    </Router>,
    document.getElementById('root'),
);
