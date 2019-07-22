/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-06-22 17:50:55
 * @modify date 2019-06-22 17:50:55
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css';

import {StoreProvider} from './store/context';
import Header from './components/Header/index';
import List from './components/List/index';
import Footer from './components/Footer/index';

export const App = props => (<StoreProvider>
    <div className="todoapp">
        <header className="header">
            <h1>todos</h1>
            <Header />
        </header>
        <List />
        <Footer />
    </div>
</StoreProvider>);

ReactDOM.render(
    <App/>,
    document.getElementById('root') || document.createElement('div') // for testing purposes
);
