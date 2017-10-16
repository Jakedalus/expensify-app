import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
}); 

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    
    expect(state.sortBy).toBe('date');
});

test('should set text filer', () => {
    const text = 'A text filter';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
    
    expect(state.text).toBe(text);
});

test('should set start date filer', () => {
    const startDate = moment().subtract(4, 'month');
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
    
    expect(state.startDate).toBe(startDate);
});

test('should set end date filer', () => {
    const endDate = moment().add(4, 'month');
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
    
    expect(state.endDate).toBe(endDate);
});


