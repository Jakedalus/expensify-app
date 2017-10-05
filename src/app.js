import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
    
});

store.dispatch(addExpense({ description: 'Water bill', amount: 300 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 130 }));

store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));    

