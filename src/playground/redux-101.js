import { createStore } from 'redux';

// redux state container
// first arg is function for state (default state)
// second arg is action
const store = createStore((state = { count: 0 }, action) => {
    // if (action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1
    //     }
    // } else {
    //     return state;
    // }

    // switch case is mostly used
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }

})

// to get current state object
console.log(store.getState());

// actions are used to change the redux store(communicating with the store)
// actions- are the objects that gets sent to the store

// meaning full effect on the store
store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})

console.log(store.getState());