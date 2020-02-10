// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// console.log('it is working, I am a robot')

// The bank - state
// Describe the ideal version of state:

// {
//     amount: 100
// }

// // If we added 1 to the amount, what would state look like

// {
//     amount: 101
// }

// // A transaction slip - action

// {
//     type: 'INCREMENT'
// }

// {
//     type: 'DECREMENT'
// }

import { 
    createStore
 } from 'redux';

// The teller - a reducer function
// reducers are always named for the state they manage
// they always receive the current state and the action they're processing.
function counter(state={ amount: 100}, action) {
    console.log('Somebody called counter');
    const newState = {...state};
    if (action.type === 'INCREMENT') {
        newState.amount = state.amount + 1;
    } else if (action.type === 'DECREMENT') {
        newState.amount = state.amount - 1;
    } else{
        // ... no need to do anything
        // we already made a copy of state to return.
    }
    // they *must* return a new version of the state
    return newState;
}

// You give it a reducer, it gives you a 'store'
// The store is an object that manages your state using your reducer
const store = createStore(counter);

// Push notifications - subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now:`)
    console.table(store.getState());
})

// Let's give the store some actions to process
let increment = (times) => {
    let i = 0;
    while (i < times) {
        store.dispatch({
            type: 'INCREMENT'
        });
        i++;
    }
}

// increment(17);

let decrement = (times) => {
    let i = 0;
    while (i < times) {
        store.dispatch({
            type: 'DECREMENT'
        });
        i++;
    }
}

// decrement(14);
// increment(14);


// in redux, it is an error if you try to modify state directly
