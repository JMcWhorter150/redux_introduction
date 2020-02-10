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

 // Create your action types as constants so that you get error messages for types.
// HOW TO ADD AND REMOVE COUNTERS (amounts)
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const ADD_COUNTER = "ADD_COUNTER";
const DEL_COUNTER = "DEL_COUNTER";

const defaultState = {
    amounts: [0]
}
 // Write action creator functions
 // They format your action objects to avoid typos

 function actionIncrement(id=0)  {
    return {
        type: INCREMENT,
        id
    }
 }

 function actionDecrement(id=0) {
    return {
        type: DECREMENT,
        id
    }
 }

 function actionAddCounter(start=0) {
     return {
         type: ADD_COUNTER,
         start
     }
 }

 function actionDelCounter(id) {
    return {
        type: DEL_COUNTER,
        id
    }
}

// The teller - a reducer function
// reducers are always named for the state they manage
// they always receive the current state and the action they're processing.
function counter(state=defaultState, action) {
    console.log('Somebody called counter');
    const newState = {...state};

    switch(action.type) {
        case INCREMENT:
            newState.amounts[action.id] = state.amounts[action.id] + 1;
            break;
        case DECREMENT:
            newState.amounts[action.id] = state.amounts[action.id] - 1;
            break;
        case ADD_COUNTER:
            newState.amounts.push(action.start);
            break;
        case DEL_COUNTER:
            newState.amounts.splice(action.id, 1);
        default:
            break;
    }


    // if (action.type === 'INCREMENT') {
    //     newState.amount = state.amount + action.amount;
    // } else if (action.type === 'DECREMENT') {
    //     newState.amount = state.amount - action.amount;
    // } else{
    //     // ... no need to do anything
    //     // we already made a copy of state to return.
    // }
    // they *must* return a new version of the state
    return newState;
}

// You give it a reducer, it gives you a 'store'
// The store is an object that manages your state using your reducer
const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Push notifications - subscribe to changes in the store
store.subscribe(() => {
    console.log(`The state is now:`)
    console.table(store.getState());
})

// Let's give the store some actions to process
// store.dispatch({
//     type: 'DECREMENT',
//     amount: 99
// })

// store.dispatch(actionAddCounter());
// store.dispatch(actionAddCounter());
// store.dispatch(actionIncrement(1));
// store.dispatch(actionIncrement(1));
// store.dispatch(actionIncrement());
// store.dispatch(actionDelCounter(1));


store.dispatch(actionIncrement());
store.dispatch(actionIncrement());
store.dispatch(actionAddCounter());
store.dispatch(actionAddCounter());
store.dispatch(actionAddCounter());
store.dispatch(actionDecrement());
store.dispatch(actionIncrement(2));
store.dispatch(actionDecrement(3));


// store.dispatch(actionIncrement(44));
// store.dispatch(actionDecrement(4));
// store.dispatch(actionIncrement());
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
