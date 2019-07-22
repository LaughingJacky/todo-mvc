/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-06-24 15:14:16
 * @modify date 2019-06-24 15:14:16
 */
import React, {Fragment} from 'react';
import {StoreConsumer} from '../../store/context';
import ListItem from '../ListItem/index';

export default () => (<StoreConsumer>
    {({list, onToggle, onToggleAll, onDelete, onListTextChange}) => (<section className="main">
        {
            list.length > 0 && <Fragment>
                <input
                    checked={list.filter(({completed}) => completed).length === list.length}
                    onChange={onToggleAll()}
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
            </Fragment>
        }
        <ul
            className="todo-list">
            {list.map((l, i) => (<ListItem
                key={'' + l.text + i}
                text={l.text}
                isComplete={l.completed}
                onToggle={onToggle(i)}
                onDelete={onDelete(i)}
                onTextChange={onListTextChange(i)}
            />))}
        </ul>
    </section>)}
</StoreConsumer>);
