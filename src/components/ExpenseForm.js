import React from 'react';

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onNoteChange = this.onNoteChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        // default states
        this.state = {
            description: '',
            note: '',
            amount: ''
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