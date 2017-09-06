import React from 'react';
import ReactDOM from 'react-dom';

/*import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/


import expect from 'expect';
import {createStore} from 'redux';

const counter = (state=0,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }   
    return state;
}

// expect( 
//     counter(0 , {type:'INCREMENT'})
// ).toEqual(1);

// expect( 
//     counter(1 , {type:'INCREMENT'})
// ).toEqual(2);

// expect( 
//     counter(2 , {type:'DECREMENT'})
// ).toEqual(1);

// expect( 
//     counter(1 , {type:'DECREMENT'})
// ).toEqual(0);

// console.log("TESTS PASSED");

//const {createStore} = Redux;

const store = createStore(counter);

const Counter = ({
    value,
    onIncrement,
    onDecrement}
) => {return (
    <div>
        <h1>{value}</h1>
        <button onClick ={onIncrement}>+</button>
        <button onClick ={onDecrement}>-</button>
    </div>
);}
// console.log(store.getState());

// store.dispatch ({ type : 'Increment' });
// console.log(store.getState());
const render = () => {
    ReactDOM.render(
        <Counter 
            value= {store.getState()}
            onIncrement = {() =>{
                store.dispatch({type:'INCREMENT'})
                }}
            onDecrement = {() => {
                store.dispatch({type:'DECREMENT'})
            }}/>,
    document.getElementById('root'));
}; 

store.subscribe(render);
render();
// document.addEventListener('click',() =>{
//     store.dispatch ({ type : 'INCREMENT' })
// })