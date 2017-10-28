import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should NOT remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Groceries',
        note: '',
        amount: 500,
        createdAt: moment(0).add(14, 'day').valueOf()
    };
    
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const note = 'This gum was bad';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    
    expect(state[0].note).toBe(note);
});

test('should NOT edit expense if expense not found', () => {
    const note = 'This gum was bad';
    const updates = {
        note
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {    
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    
    expect(state).toEqual([expenses[1]]);
});

