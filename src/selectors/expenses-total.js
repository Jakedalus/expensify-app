import expenses from '../tests/fixtures/expenses';


export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, current) => sum + current, 0);
}


