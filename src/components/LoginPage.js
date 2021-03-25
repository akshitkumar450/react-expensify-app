import React from 'react'
import { startLogin } from '../actions/auth'
import { connect } from 'react-redux'

const LoginPage = (props) => {
    return (
        <div>
            <button onClick={props.dispatch(startLogin)} >login </button>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         startLogin: () => dispatch(startLogin())
//     }
// }

export default connect()(LoginPage)