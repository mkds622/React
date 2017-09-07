import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore,combineReducers } from 'redux';
//import combineReducers from './Reducers/combineReducers.js';
import todos from './Reducers/todos.js';
import visibilityFilter from './Reducers/visibilityFilter.js';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let nextToDoID = 0;
class ToDoApp extends React.Component {
    render() {
        return (
            <div>
                <input ref={node => {
                    this.input = node;
                }} />
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextToDoID++
                    });
                    this.input.value = '';
                }}> Add Todo </button>
                <ul>
                    {this.props.todos.map(t =>
                        <li key={t.id}
                            onClick={() => {
                                store.dispatch({
                                    type: 'TOGGLE_TODO',
                                    id: t.id
                                });
                            }}
                            style={{
                                textDecoration: t.completed ? 'line-through' : 'none'
                            }}>
                            {t.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
        <ToDoApp todos={store.getState().todos} />,
        document.getElementById('root')
    );

};

store.subscribe(render);
render();