import { createStore } from 'redux';

// redux state container
// first arg is function for state (default state)
const store = createStore((state = { count: 0 }) => {
    return state
})

// to get current state object
console.log(store.getState());
