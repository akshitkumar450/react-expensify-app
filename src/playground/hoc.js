// higher order component (HOC)-> a component (HOC) that renders other component
// resue code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom'

//  a regular component
const Info = (props) => {
    return (
        <div>
            <h1> hello</h1>
            <p>sdsadsad {props.info}</p>
        </div>
    )
}

// HOC 
//  HOC takes a regular component and renders it
const Hoc = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>new hoc</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requiredAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (<WrappedComponent {...props} />) : (<p>not auth</p>)}
        </div>
    )
}

const NewHoc = Hoc(Info)
const AuthInfo = requiredAuth(Info)
// ReactDOM.render(<NewHoc isAdmin={false} info=" brother " />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={false} info=" brother " />, document.getElementById('app'))