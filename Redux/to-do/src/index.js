import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
//import combineReducers from './Reducers/combineReducers.js';
import todos from './Reducers/todos.js';
import visibilityFilter from './Reducers/visibilityFilter.js';

const FilterLink = ({ filter, currentFilter, children, onFilterClick }) => {
    if (filter === currentFilter) {
        return <span>{children}</span>;
    }
    return (
        <a href='#' onClick={e => {
            e.preventDefault();
            onFilterClick(filter);
            
        }}>{children}</a>
    );
};

const Todo = ({
    onClick,
    completed,
    text
}) => (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
            {text}
        </li>
    );

const TodoList = ({
    todos,
    onTodoClick
}) => (
        <ul>
            {

            todos.map(todo =>
                <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
            )}
        </ul>
    );

const AddTodo = ({ onAddClick }) => {

    let input;
    return (<div>
        <input ref={node => {
            input = node;
        }} />
        <button onClick={() => {
            onAddClick(input.value);
            input.value = '';
        }}> Add Todo </button>
    </div>);
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const Footer = ({
    visibilityFilter, onFilterClick
}) => (
        <p>
            Show:
            {' '}
            <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter} onFilterClick={onFilterClick}> All </FilterLink>
            {' '}
            <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter} onFilterClick={onFilterClick}> Active </FilterLink>
            {' '}
            <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter} onFilterClick={onFilterClick}> Completed </FilterLink>
        </p>
    );

const store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};
let nextToDoID = 0;


const ToDoApp = ({
    todos,
    visibilityFilter
}) => (
        <div>
            <AddTodo
                onAddClick={text =>
                    store.dispatch({
                        type: 'ADD_TODO',
                        text,
                        id: nextToDoID++
                    })
                } />

            <TodoList
                todos={
                    getVisibleTodos(
                        todos,
                        visibilityFilter
                    )
                }
                onTodoClick={id =>
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                } />
            <Footer visibilityFilter={visibilityFilter}
                onFilterClick={ filter  => store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                })}
            />
        </div>
    );

const render = () => {
    ReactDOM.render(
        <ToDoApp {...store.getState() } />,
        document.getElementById('root')
    );

};

store.subscribe(render);
render();