import React from 'react';

import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


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
        // default states
        this.state = {
            description: '',
            note: '',
            amount: '',
            createdAt: moment(),
            calendarFocused: false
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
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount: amount }))
        }
    }

    onDateChange(createdAt) {
        this.setState(() => ({ createdAt: createdAt }))
    }

    onFocusChange({ focused }) {
        this.setState(() => ({ calendarFocused: focused }))
    }

    render() {
        return (
            <div>
                <form>
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