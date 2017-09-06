// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import expect from 'expect';

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

expect( 
    counter(0 , {type:'INCREMENT'})
).toEqual(1);

expect( 
    counter(1 , {type:'INCREMENT'})
).toEqual(2);

expect( 
    counter(2 , {type:'DECREMENT'})
).toEqual(1);

expect( 
    counter(1 , {type:'DECREMENT'})
).toEqual(0);

console.log("TESTS PASSED");