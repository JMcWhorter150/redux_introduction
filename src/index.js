// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';

// // ReactDOM.render(<App />, document.getElementById('root'));

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
// // console.log('it is working, I am a robot')

// // The bank - state
// // Describe the ideal version of state:

// // {
// //     amount: 100
// // }

// // // If we added 1 to the amount, what would state look like

// // {
// //     amount: 101
// // }

// // // A transaction slip - action

// // {
// //     type: 'INCREMENT'
// // }

// // {
// //     type: 'DECREMENT'
// // }

// import { 
//     createStore
//  } from 'redux';

//  // Create your action types as constants so that you get error messages for types.
// // HOW TO ADD AND REMOVE COUNTERS (amounts)
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";

// const ADD_COUNTER = "ADD_COUNTER";
// const DEL_COUNTER = "DEL_COUNTER";

// const defaultState = {
//     amounts: [0]
// }
//  // Write action creator functions
//  // They format your action objects to avoid typos

//  function actionIncrement(id=0)  {
//     return {
//         type: INCREMENT,
//         id
//     }
//  }

//  function actionDecrement(id=0) {
//     return {
//         type: DECREMENT,
//         id
//     }
//  }

//  function actionAddCounter(start=0) {
//      return {
//          type: ADD_COUNTER,
//          start
//      }
//  }

//  function actionDelCounter(id) {
//     return {
//         type: DEL_COUNTER,
//         id
//     }
// }

// // The teller - a reducer function
// // reducers are always named for the state they manage
// // they always receive the current state and the action they're processing.
// function counter(state=defaultState, action) {
//     console.log('Somebody called counter');
//     const newState = {...state};

//     switch(action.type) {
//         case INCREMENT:
//             newState.amounts[action.id] = state.amounts[action.id] + 1;
//             break;
//         case DECREMENT:
//             newState.amounts[action.id] = state.amounts[action.id] - 1;
//             break;
//         case ADD_COUNTER:
//             newState.amounts.push(action.start);
//             break;
//         case DEL_COUNTER:
//             newState.amounts.splice(action.id, 1);
//         default:
//             break;
//     }


//     // if (action.type === 'INCREMENT') {
//     //     newState.amount = state.amount + action.amount;
//     // } else if (action.type === 'DECREMENT') {
//     //     newState.amount = state.amount - action.amount;
//     // } else{
//     //     // ... no need to do anything
//     //     // we already made a copy of state to return.
//     // }
//     // they *must* return a new version of the state
//     return newState;
// }

// // You give it a reducer, it gives you a 'store'
// // The store is an object that manages your state using your reducer
// const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// // Push notifications - subscribe to changes in the store
// store.subscribe(() => {
//     console.log(`The state is now:`)
//     console.table(store.getState());
// })

// // Let's give the store some actions to process
// // store.dispatch({
// //     type: 'DECREMENT',
// //     amount: 99
// // })

// // store.dispatch(actionAddCounter());
// // store.dispatch(actionAddCounter());
// // store.dispatch(actionIncrement(1));
// // store.dispatch(actionIncrement(1));
// // store.dispatch(actionIncrement());
// // store.dispatch(actionDelCounter(1));


// store.dispatch(actionIncrement());
// store.dispatch(actionIncrement());
// store.dispatch(actionAddCounter());
// store.dispatch(actionAddCounter());
// store.dispatch(actionAddCounter());
// store.dispatch(actionDecrement());
// store.dispatch(actionIncrement(2));
// store.dispatch(actionDecrement(3));


// // store.dispatch(actionIncrement(44));
// // store.dispatch(actionDecrement(4));
// // store.dispatch(actionIncrement());
// let increment = (times) => {
//     let i = 0;
//     while (i < times) {
//         store.dispatch({
//             type: 'INCREMENT'
//         });
//         i++;
//     }
// }

// // increment(17);

// let decrement = (times) => {
//     let i = 0;
//     while (i < times) {
//         store.dispatch({
//             type: 'DECREMENT'
//         });
//         i++;
//     }
// }

// // decrement(14);
// // increment(14);


// // in redux, it is an error if you try to modify state directly
// To be able to access redux state tools
import { createStore } from 'redux';

// Set these to allow VSCode to identify spelling mistakes and get helpful console errors
const ADDMOVIE = "ADDMOVIE";
const UPDATESONG = "UPDATESONG";
const ADDBURRITO = "ADDBURRITO";
const ADDCOFFEE = "ADDCOFFEE";
const SETSANDWICH = "SETSANDWICH";


// Define initial states
const movieState = {
    howManyMovies: 0
}

const songState = {
    favoriteSong: {title:"RumBrave", artist:"Murder by Death"}
}

const foodState = {
    numberOfBurritos: 0
}

const coffeeState = {
    cupsDrank: 0
}

const sandwichState = {
    forLunch: 'Reuben'
}

// Describe initial action types and how it will be modifying initial state
const movieAction = {
    type: "ADDMOVIE",
    amount: 1
}
// if you have multiple pieces of information to add to an action include a payload as shown below
// const updateSong = {
    // type: "UPDATESONG",
    // payload: {
        // title: "Brother",
        // artist: "Murder by Death"
    // }
// }

const updateSong = {
    type: "UPDATESONG",
    newSong: {title: "Brother", artist: "Murder by Death"}
}

const updateFood = {
    type: "ADDBURRITO",
    amount: 1
}

const updateCoffee = {
    type: 'ADDCOFFEE',
    amount: 1
}

const setSandwich = {
    type: 'SETSANDWICH',
    sandwich: "Pub Sub"
}

// Define reduce functions that will affect the state using the supplied actions
// Could use if/else, but switch works better for large sets of if/elses (most examples)
function countMovies(state=movieState, action) {
    console.log('Updated movies');
    const newState = {...state};
    switch(action.type) {
        case ADDMOVIE:
            newState.howManyMovies = state.howManyMovies + action.amount;
            break;
        default:
            break;
    }
    return newState;
}

function favoriteSong(state=songState, action) {
    console.log('Updated favorite song');
    const newState = {...state};
    switch(action.type) {
        case UPDATESONG:
            newState.favoriteSong = action.newSong;
            break;
        default:
            break;
    }
    return newState;
}

function countBurritos(state=foodState, action) {
    console.log('Updated burritos eaten');
    const newState = {...state};
    switch(action.type) {
        case ADDBURRITO:
            newState.numberOfBurritos = state.numberOfBurritos + action.amount;
            break;
        default:
            break;
    }
    return newState;
}

function countCoffee(state=coffeeState, action) {
    console.log('Updated coffee drank');
    const newState = {...state};
    switch(action.type) {
        case ADDCOFFEE:
            newState.cupsDrank = state.cupsDrank + action.amount;
            break;
        default:
            break;
    }
    return newState;
}

function setLunch(state=sandwichState, action) {
    console.log('Updated sandwich for lunch');
    const newState = {...state};
    switch(action.type) {
        case SETSANDWICH:
            newState.forLunch = action.sandwich;
            break;
        default:
            break;
    }
    return newState;
}


// Sets up the initial "stores" or "banks" or redux states
// Second argument allows you to see the changes in the redux devtools
const movieStore = createStore(countMovies, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const songStore = createStore(favoriteSong, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const burritoStore = createStore(countBurritos, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const coffeeStore = createStore(countCoffee, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const sandwichStore = createStore(setLunch, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe functions let you know when a state/store is updated
movieStore.subscribe(() => {
    console.log('Updating movie state to:')
    console.table(movieStore.getState());
});

songStore.subscribe(() => {
    console.log('Updating song state to:')
    console.table(songStore.getState());
});

burritoStore.subscribe(() => {
    console.log('Updating burrito state to:')
    console.table(burritoStore.getState());
});

coffeeStore.subscribe(() => {
    console.log('Updating coffee state to:')
    console.table(coffeeStore.getState());
});

sandwichStore.subscribe(() => {
    console.log('Updating lunch/sandwich state to:')
    console.table(sandwichStore.getState());
});

// Dispatches are the actions sent to modify store/state

// movie actions
movieStore.dispatch(movieAction);
movieStore.dispatch(movieAction);
movieStore.dispatch(movieAction);

// song actions
songStore.dispatch(updateSong);
songStore.dispatch({
    type: UPDATESONG,
    newSong: {title: 'Howl', artist: "Beware of Darkness"}
});

// burrito actions
burritoStore.dispatch(updateFood);
burritoStore.dispatch(updateFood);
burritoStore.dispatch(updateFood);

// coffee actions
coffeeStore.dispatch(updateCoffee);
coffeeStore.dispatch(updateCoffee);

// sandwich actions
sandwichStore.dispatch(setSandwich);
sandwichStore.dispatch({
    type: SETSANDWICH,
    sandwich: 'Grilled Cheese'
})