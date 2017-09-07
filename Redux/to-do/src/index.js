import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore,combineReducers } from 'redux';
//import combineReducers from './Reducers/combineReducers.js';
import todos from './Reducers/todos.js';
import visibilityFilter from './Reducers/visibilityFilter.js';

const FilterLink = ({filter,currentFilter,children}) => {
    if(filter === currentFilter){
        return <span>{children}</span>;
    }
    return (
        <a href= '#' onClick={ e => {
                                e.preventDefault();
                                store.dispatch({
                                    type: 'SET_VISIBILITY_FILTER' ,
                                    filter
                                });
                            }}>{children}</a>
    );
}

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const getVisibleTodos = ( todos, filter ) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter( t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter( t => !t.completed);
    }
}
let nextToDoID = 0;


class ToDoApp extends React.Component {
    render() {
        const {
            todos,
            visibilityFilter
        } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        );
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
                    {visibleTodos.map(t =>
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
                <p>
                    Show:
                    {' '}
                    <FilterLink filter = 'SHOW_ALL' currentFilter = {visibilityFilter}> All </FilterLink>
                    {' '}
                    <FilterLink filter = 'SHOW_ACTIVE' currentFilter = {visibilityFilter}> Active </FilterLink>
                    {' '}
                    <FilterLink filter = 'SHOW_COMPLETED' currentFilter = {visibilityFilter}> Completed </FilterLink>    
                </p>
            </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
        <ToDoApp {...store.getState()} />,
        document.getElementById('root')
    );

};

store.subscribe(render);
render();