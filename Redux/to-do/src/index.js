import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
//import combineReducers from './Reducers/combineReducers.js';
import todos from './Reducers/todos.js';
import visibilityFilter from './Reducers/visibilityFilter.js';
import {Provider,connect} from 'react-redux';
const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>;
    }
    return (
        <a href='#' onClick={e => {
            e.preventDefault();
            onClick();
            
        }}>{children}</a>
    );
};

const mapStateToLinkProps =(
    state,
    ownProps
) => {
    return {
        active:ownProps.filter === state.visibilityFilter
    };
}
const mapDispatchToLinkProps = (
    dispatch,
    ownProps
) =>{
    return {
        onClick: ()=>{
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter : ownProps.filter
            })
        }
    };
}
const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);


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

const mapStateToTodoListProps = (state) =>{
    return {
        todos:getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    }
};
const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick:(id) =>
        dispatch({ 
            type: 'TOGGLE_TODO',
            id
        })
    }
}
const VisibleTodoList = connect (
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);




let AddTodo = ({dispatch}) => {

    let input;
    return (<div>
        <input ref={node => {
            input = node;
        }} />
        <button onClick={() => {
            dispatch({
                        type: 'ADD_TODO',
                        text:input.value,
                        id: nextToDoID++
                    });
            input.value = '';
        }}> Add Todo </button>
    </div>);
};
AddTodo= connect()(AddTodo);
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const Footer = ({}) => (
        <p>
            Show:
            {' '}
            <FilterLink filter='SHOW_ALL' > All </FilterLink>
            {' '}
            <FilterLink filter='SHOW_ACTIVE' > Active </FilterLink>
            {' '}
            <FilterLink filter='SHOW_COMPLETED' > Completed </FilterLink>
        </p>
    );




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


const ToDoApp = ({}) => (
        <div>
            <AddTodo />

            <VisibleTodoList />
            <Footer />
        </div>
    );

// const store = createStore(todoApp,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// class Provider extends React.Component {
//     getChildContext(){
//         return {
//             store:this.props.store
//         };
//     }
//     render() {
//        this.props.children;
//     }
// }

// Provider.childContextTypes = {
//     store : React.PropTypes.object
// } 
ReactDOM.render(
    <Provider store = {createStore(todoApp,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <ToDoApp  />
    </Provider>,
    document.getElementById('root')
);
