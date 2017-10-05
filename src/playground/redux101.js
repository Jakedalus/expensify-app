import { createStore } from 'redux';


const incrementCount = ({ incBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incBy
});  

const decrementCount = ({ decBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decBy
});  

const resetCount = () => ({
    type: 'RESET'
});  

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});  


// Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { 
                count: state.count + action.incBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};


const store = createStore(countReducer);

const unsub = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decBy: 15 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 103 }));





