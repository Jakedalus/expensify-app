import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total'; 

import expenses from '../fixtures/expenses';

test('should correctly display 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary expenses={[expenses[0]]} getTotal={selectExpensesTotal} />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should correctly display multiple expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary expenses={expenses} getTotal={selectExpensesTotal} />
    );
    expect(wrapper).toMatchSnapshot();
});

