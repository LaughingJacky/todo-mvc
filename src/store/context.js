/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-06-24 10:24:55
 * @modify date 2019-06-24 10:24:55
 */
import React from 'react';
import {usePersistState, useSubscribeState} from './persist';
import {useTodoStore} from './index';

export const StoreContext = React.createContext();

export const StoreConsumer = ({children}) => (<StoreContext.Consumer>
    {v => children(v)}
</StoreContext.Consumer>);

export const StoreProvider = ({children}) => {

    // get persist storage from localStorage
    const {loading, persistState} = usePersistState();
    const store = useTodoStore(persistState, loading);

    /**
     * subscribe effect on state change
     * to store to persist storage
     */
    const {list, type, input} = store;
    useSubscribeState({list, type, input});

    return (<StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>);
};
