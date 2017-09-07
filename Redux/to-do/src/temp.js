import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleToDo = (todo) => {
    // violates Immutability constraint, and so it produces exception
    // todo.completed = !todo.completed;
    // return todo;

    //May have compatibility issues.
    //return Object.assign({},todo,{completed:!todo.completed});

    return {
        ...todo,
        completed : !todo.completed
    };
};

const testToggleToDo = () => {
    const todoBefore = {
        id : 0,
        text : 'Go to Market',
        completed : false
    };
    const todoAfter = {
        id : 0,
        text : 'Go to Market',
        completed : true
    };

    deepFreeze(todoBefore);
    expect(
        toggleToDo(todoBefore)
    ).toEqual(todoAfter);
}

testToggleToDo();
console.log('All Tests Passed');