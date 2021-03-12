import { createStore } from 'redux';

// redux state container
// first arg is function for state (default state)
// second arg is action
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }

})

// this fn get call every time store changes i.e(state changes)
// basically used ro rerendering
// it return a function when we want to stop the dispatch
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// to get current state object

// actions are used to change the redux store(communicating with the store)
// actions- are the objects that gets sent to the store

// meaning full effect on the store
store.dispatch({
    type: 'INCREMENT',
    // to give other information(can be access by action)
    // to use dynamic actions
    incrementBy: 5
})

store.dispatch({
    type: 'INCREMENT'
})

// stop subscribtion
// unsubscribe()

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
})
store.dispatch({
    type: 'INCREMENT',

})

store.dispatch({
    type: 'SET',
    count: 101
})
// console.log(store.getState());