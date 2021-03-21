import React from 'react';

import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

// for dates
const date = moment()
// console.log(date.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onNoteChange = this.onNoteChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // default states
        // props.expense will come from editExpensePage component
        this.state = {
            description: props.expense ? props.expense.des : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description: description }))
    }

    onNoteChange(e) {
        const note = e.target.value;
        this.setState(() => ({ note: note }))
    }

    onAmountChange(e) {
        const amount = e.target.value
        // we have use regular expression to let user to enter amount in specific format
        // 1000656.54 (only this type)
        // (!amount) to delete the input value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount: amount }))
        }
    }

    onDateChange(createdAt) {
        if (createdAt) {
            this.setState(() => ({ createdAt: createdAt }))
        }
    }

    onFocusChange({ focused }) {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit(e) {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            // set error state equal to provide des and amount
            this.setState(() => ({ error: 'please provide description and amount' }))
        } else {
            // clear error 
            this.setState(() => ({ error: '' }))

            // when form get submitted all the data will be passed to AddExpensePage file
            this.props.onSubmit({
                des: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

                    <input
                        type='text'
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder='add a note(optional)'
                    ></textarea>
                    <button>add expense</button>
                </form>
            </div>
        )
    }
}
export default ExpenseForm