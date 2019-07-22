/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-06-24 11:36:12
 * @modify date 2019-06-24 11:36:12
 */
import React from 'react';
import {StoreConsumer} from '../../store/context';

const typeList = ['all', 'active', 'completed'];

const TypeBtn = ({active, text, onClick}) => (<a
    href="#/"
    onClick={onClick}
    data-testid="type-list"
    className={active ? 'selected' : ''}>
    {text}
</a>);

export default () => (<StoreConsumer>
    {({list, type, onTypeChange, onClearCompleted}) => (<footer className="footer">
        <span className="todo-count">
            <strong>{list.filter(({completed}) => !completed).length}</strong> items left
        </span>
        <ul className="filters">
            {typeList.map(n => (<li key={n}>
                <TypeBtn
                    active={type === n}
                    text={n}
                    onClick={onTypeChange(n)}
                />
            </li>))}
        </ul>
        <button data-testid="clear-completed" className="clear-completed" onClick={onClearCompleted}>
            Clear completed
        </button>
    </footer>)}
</StoreConsumer>);
