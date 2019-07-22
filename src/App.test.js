/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-06-26 10:37:36
 * @modify date 2019-06-27 11:29:05
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
    render,
    getByTestId,
    getAllByTestId,
    fireEvent
} from '@testing-library/react';
import {App} from './app';

it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('./store/index.js', () => {
    const {container} = render(<App />);
    const inputDOM = getByTestId(container, 'input');
    const allTypeList = getAllByTestId(container, 'type-list');

    it('App loads with initial state', () => {
        expect(inputDOM.value).toBe('');
        const typeSelected = allTypeList.find(v => v.className === 'selected');
        expect(typeSelected.textContent).toBe('all');
        expect(container.querySelectorAll('[data-testid="todo-list"]').length).toBe(0);
    });

    it('test input change', () => {
        const text = 'first to do';
        fireEvent.change(inputDOM, {target: {value: text}});
        expect(inputDOM.value).toBe(text);

        fireEvent.keyDown(inputDOM, {key: 'Enter', keyCode: 13});
        expect(inputDOM.value).toBe('');
        const todoList = container.querySelectorAll('[data-testid="todo-list"]');
        expect(todoList.length).toBe(1);
        expect(todoList[0].getAttribute('data-text')).toBe(text);
        expect(todoList[0].getAttribute('data-complete')).toBe('false');
        fireEvent.click(todoList[0].children[0]);
        expect(todoList[0].getAttribute('data-complete')).toBe('true');
    });

    it('test clear completed', () => {
        const completeBtn = getByTestId(container, 'clear-completed');
        fireEvent.click(completeBtn);
        expect(container.querySelectorAll('[data-testid="todo-list"]').length).toBe(0);
    });

    it('test view type change', () => {
        fireEvent.click(allTypeList[1]);
        const typeSelected = allTypeList.find(v => v.className === 'selected');
        expect(typeSelected.textContent).toBe('active');
    });
});
