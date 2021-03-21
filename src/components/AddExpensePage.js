import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(expense) {
        this.props.onSubmit(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1> Add expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1> Add expense</h1>
//         <ExpenseForm
//             // when the form get submitted all data will be sent bt ExpenseForm
//             onSubmit={(expense) => {
//                 // console.log(expense);
//                 // to add new expenses to store
//                 // props.dispatch(addExpense(expense))
//                 // for redirecting to other page (dashboard)
//                 props.onSubmit(expense)
//                 props.history.push('/')
//             }}
//         />
//     </div>
// )
// for testing 
const mapDispatchToProps = (dispatch) => {
    //  used to return props
    return {
        onSubmit: (expense) => {
            return dispatch(addExpense(expense))
        }
    }
}
export default connect(undefined, mapDispatchToProps)(AddExpensePage)