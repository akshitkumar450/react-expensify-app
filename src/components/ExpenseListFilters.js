import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'

// filter by text

//  value={props.filters.text}-> will give the value set by default by store
// props.dispatch(setTextFilter(e.target.value))  -> will change the new value from the input to store
const ExpenseListFilters = (props) => (
    <div>
        <input type='text' value={props.filters.text} onChange={(e) => {
            console.log(e.target.value);
            props.dispatch(setTextFilter(e.target.value))
        }} />
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)