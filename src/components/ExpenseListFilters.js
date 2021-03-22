import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// filter by text

//  value={props.filters.text}-> will give the value set by default by store
// props.dispatch(setTextFilter(e.target.value))  -> will change the new value from the input to store
export class ExpenseListFilters extends React.Component {

    constructor(props) {
        super(props)
        this.onDatesChange = this.onDatesChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
        this.onSortChange = this.onSortChange.bind(this)
        this.state = {
            calendarFocused: null
        }
    }

    onDatesChange({ startDate, endDate }) {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange(calendarFocused) {
        this.setState(() => ({ calendarFocused: calendarFocused }))
    }

    onSortChange(e) {
        // console.log(e.target.value);
        if (e.target.value === 'date') this.props.sortByDate()
        else if (e.target.value === 'amount') this.props.sortByAmount()
    }

    onTextChange(e) {
        // console.log(e.target.value);
        this.props.setTextFilter(e.target.value)
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />

                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    startDateId="your_unique_start_date_id"
                    endDateId="your_unique_end_date_id"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)


// import React from 'react'
// import { connect } from 'react-redux'
// import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
// import 'react-dates/initialize';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

// // filter by text

// //  value={props.filters.text}-> will give the value set by default by store
// // props.dispatch(setTextFilter(e.target.value))  -> will change the new value from the input to store
// export class ExpenseListFilters extends React.Component {

//     constructor(props) {
//         super(props)
//         this.onDatesChange = this.onDatesChange.bind(this)
//         this.onFocusChange = this.onFocusChange.bind(this)
//         this.state = {
//             calendarFocused: null
//         }
//     }

//     onDatesChange({ startDate, endDate }) {
//         this.props.dispatch(setStartDate(startDate))
//         this.props.dispatch(setEndDate(endDate))
//     }
//     onFocusChange(calendarFocused) {
//         this.setState(() => ({ calendarFocused: calendarFocused }))
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                     type='text'
//                     value={this.props.filters.text}
//                     onChange={(e) => {
//                         // console.log(e.target.value);
//                         this.props.dispatch(setTextFilter(e.target.value))
//                     }}
//                 />

//                 <select
//                     value={this.props.filters.sortBy}
//                     onChange={(e) => {
//                         // console.log(e.target.value);
//                         if (e.target.value === 'date') this.props.dispatch(sortByDate())
//                         else if (e.target.value === 'amount') this.props.dispatch(sortByAmount())
//                     }}
//                 >
//                     <option value='date'>Date</option>
//                     <option value='amount'>Amount</option>
//                 </select>

//                 <DateRangePicker
//                     startDate={this.props.filters.startDate}
//                     endDate={this.props.filters.endDate}
//                     onDatesChange={this.onDatesChange}
//                     focusedInput={this.state.calendarFocused}
//                     onFocusChange={this.onFocusChange}
//                     numberOfMonths={1}
//                     isOutsideRange={() => false}
//                     showClearDates={true}
//                     startDateId="your_unique_start_date_id"
//                     endDateId="your_unique_end_date_id"
//                 />
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         filters: state.filters
//     }
// }

// export default connect(mapStateToProps)(ExpenseListFilters)