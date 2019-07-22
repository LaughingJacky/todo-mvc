/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-07-22 11:19:12
 * @modify date 2019-07-22 11:19:12
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();