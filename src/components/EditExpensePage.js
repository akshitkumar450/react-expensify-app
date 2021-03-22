import React from 'react';
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm'
export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onRemove = this.onRemove.bind(this)
    }

    onSubmit(expense) {
        // console.log('updates', expense);
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onRemove() {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <EditExpensePage
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>remove</button>
            </div>
        )
    }

}

// const EditExpensePage = (props) => (
//     <div>
//         <p>id with {props.match.params.id}</p>
//         <ExpenseForm
//             // props.expense will the matched object containing(des,amount,note,createdAt) in expenses array
//             expense={props.expense}
//             onSubmit={(expense) => {
//                 // console.log('updates', expense);
//                 props.dispatch(editExpense(props.expense.id, expense))
//                 props.history.push('/')
//             }} />

//         <button onClick={(e) => {
//             props.dispatch(removeExpense({ id: props.expense.id }))
//             props.history.push('/')
//         }}>remove</button>
//     </div>
// )

const mapStateToProps = (state, props) => {
    return {
        // expense will be the object with the matched id
        // item will the expense object
        expense: state.expenses.find((item) => {
            // to find by id in the expenses array
            return item.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)