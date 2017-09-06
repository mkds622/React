

import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './Reducers/counterReducer.js';
import {Counter} from './Components/Counter';
/*import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/


import {createStore} from 'redux';


const store = createStore(counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());

const render = () => {
    ReactDOM.render(
        <div>
            {(store.getState()).map((value,index) => 
                <Counter 
                    value= {value}
                    onIncrement = {() =>{
                        store.dispatch({type:'INCREMENT_COUNTER',
                                    index: index})
                    }}
                    onDecrement = {() => {
                        store.dispatch({type:'DECREMENT_COUNTER',
                                    index: index})
                    }}
                ></Counter>
            )}
            <button onClick = {() =>{store.dispatch({type:'ADD_COUNTER'})}}>Add Counter</button>
            <button onClick = {() =>{store.dispatch({type:'REMOVE_COUNTER'})}}>Remove Counter</button>
        </div>,
    document.getElementById('root'));
}; 

store.subscribe(render);
render();
// document.addEventListener('click',() =>{
//     store.dispatch ({ type : 'INCREMENT' })
// })