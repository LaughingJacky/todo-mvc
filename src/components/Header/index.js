/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-06-24 10:43:08
 * @modify date 2019-06-24 10:43:08
 */
import React from 'react';
import {StoreConsumer} from '../../store/context';

export default () => (<StoreConsumer>
    {({onEnter, input, onInputChange}) => {
        const handleEnter = e => {
            if (e.keyCode === 13) {
                onEnter();
            }
        };
        return (<input
                data-testid="input"
                className="new-todo"
                onKeyDown={handleEnter}
                placeholder="What needs to be done?"
                value={input}
                onChange={onInputChange}
            />);
    }}
</StoreConsumer>);
