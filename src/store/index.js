/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-06-24 09:59:51
 * @modify date 2019-07-19 14:44:12
 */
import {useState, useEffect} from 'react';

const defaultState = {
    input: '',
    list: [],
    type: 'all'
};

/**
 *
 * instantiate a store
 *
 * @param {Object} state 初始化信息
 *
 * @param {boolean} loading 持久化存储加载状态
 *
 * @return {Object} StoreOperator
 */
export const useTodoStore = (state = defaultState, loading) => {
    const [type, setType] = useState(state.type);
    const [list, setList] = useState(state.list);
    const [input, setInput] = useState(state.input);

    useEffect(() => {
        if (!loading) {
            setType(state.type);
            setList([...state.list]);
        }
    }, [state.type, state.list, loading]);

    return {
        type,
        input,

        /**
         *
         * get computed list
         *
         * @return {Array} TodoList
         */
        get list() {
            switch (type) {
                case 'active':
                    return list.filter(({completed}) => !completed);
                case 'completed':
                    return list.filter(({completed}) => completed);
                case 'all':
                default:
                    return list;
            }
        },

        /**
         *
         * get computed list
         *
         * @param {string} v 筛选类型
         *
         * @return {Function}
         */
        onTypeChange: v => () => {
            setType(v);
        },

        // input onchange event
        onInputChange: e => {
            setInput(e.target.value);
        },

        // add list item
        onEnter: () => {
            if (input.trim() !== '') {
                setList([...list, {text: input, completed: false}]);
            }
            setInput('');
        },

        /**
         *
         * get computed list
         *
         * @param {number} idx 列表索引
         *
         * @return {Function} callback function to change text content
         */
        onListTextChange: idx => v => {
            if (v.trim() === '') {
                setList([...list.filter((t, i) => idx !== i)]);
            }
            else {
                setList([...list.map((t, i) => {
                    if (i === idx) {
                        t.text = v;
                    }
                    return t;
                })]);
            }
        },

        // toggle complete
        onToggle: idx => e => {
            setList([...list.map((t, i) => {
                if (i === idx) {
                    t.completed = e.target.checked;
                }
                return t;
            })]);
        },
        onToggleAll: () => e => {
            setList([...list.map(t => {
                t.completed = e.target.checked;
                return t;
            })]);
        },

        /**
         *
         * delete list item
         *
         * @param {number} idx 列表索引
         *
         * @return {Function} callback function to remove list item
         */
        onDelete: idx => () => {
            setList([...list.filter((t, i) => idx !== i)]);
        },

        // delete completed list item
        onClearCompleted: () => {
            setList([...list.filter(({completed}) => !completed)]);
        }
    };
};
