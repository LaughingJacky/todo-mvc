/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-07-19 15:15:58
 * @modify date 2019-07-19 16:31:36
 */
import {useState, useEffect} from 'react';

export const usePersistState = () => {
    const [loading, setLoading] = useState(true);
    const [persistState, setPersistState] = useState();

    useEffect(() => {
        const cookieState = localStorage.getItem('todo-store');
        if (cookieState) {
            setPersistState(JSON.parse(cookieState));
        }
        setLoading(false);
    }, []);

    return {
        loading,
        persistState
    };
};

export const useSubscribeState = state => {
    useEffect(() => {
        if (!state) {
            return;
        }
        localStorage.setItem('todo-store', JSON.stringify(state));
    }, [state]);
};
