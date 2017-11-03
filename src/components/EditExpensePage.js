import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import DeleteDialogModal from './DeleteDialogModal';
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      clickedDelete: false
    };
  }

  handleClearDeleteDialogModal = (confirmDelete) => {
    if(confirmDelete) {
      this.props.startRemoveExpense({ id: this.props.expense.id });
      this.props.history.push("/");
    } 
    
    this.setState(() => ({clickedDelete: false})); 
  };

  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onClick = () => {
    this.setState(() => ({ clickedDelete: true }));
    // this.props.startRemoveExpense({ id: this.props.expense.id });
    // this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.onClick}>
            Delete Expense
          </button>
        </div>
        <DeleteDialogModal 
          clickedDelete={this.state.clickedDelete}
          confirmDelete={this.state.confirmDelete}
          handleClearDeleteDialogModal={this.handleClearDeleteDialogModal}
          description={this.props.expense.description}
        />
      </div>
    );
  }
}

const mapStateToProp = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProp, mapDispatchToProps)(EditExpensePage);
