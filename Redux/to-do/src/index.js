import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
//import combineReducers from './Reducers/combineReducers.js';
import todos from './Reducers/todos.js';
import visibilityFilter from './Reducers/visibilityFilter.js';

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

class FilterLink extends React.Component {
    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe=store.subscribe(()=>this.forceUpdate());
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        const props=this.props;
        const {store} =props;
        const state = store.getState();

        return (
            <Link
                active = {props.filter === state.visibilityFilter}
                onClick= {()=> store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter : props.filter
                })}
                >{props.children}</Link>
        );
    }
}
FilterLink.contextTypes = {
    store : React.PropTypes.Object
}

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

class VisibleTodoList extends React.Component{
    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe=store.subscribe(()=>this.forceUpdate());
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        const props = this.props;
        const {store} = this.context;
        const state = store.getState();
        
        return (
            <TodoList
            todos={
                getVisibleTodos(
                    state.todos,
                    state.visibilityFilter
                )
            }
            onTodoClick={id =>
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
            } />
        );
    }
}
VisibleTodoList.contextTypes = {
    store : React.PropTypes.Object
}
const AddTodo = (props, {store}) => {

    let input;
    return (<div>
        <input ref={node => {
            input = node;
        }} />
        <button onClick={() => {
            store.dispatch({
                        type: 'ADD_TODO',
                        text:input.value,
                        id: nextToDoID++
                    });
            input.value = '';
        }}> Add Todo </button>
    </div>);
};
AddTodo.contextTypes = {
    store : React.PropTypes.Object
}
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

class Provider extends React.Component {
    getChildContext(){
        return {
            store:this.props.store
        };
    }
    render() {
       this.props.children;
    }
}

Provider.childContextTypes = {
    store : React.PropTypes.object
}
ReactDOM.render(
    <Provider store = {createStore(todoApp,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <ToDoApp  />
    </Provider>,
    document.getElementById('root')
);
