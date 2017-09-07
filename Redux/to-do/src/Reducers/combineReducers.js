//Implementing combineReducers() from scratch

const combineReducers = (reducers) => {
    return (state = {},action) =>{
        return Object.keys(reducers).reduce(
            (nextState,key)=>{
                nextState[key]= reducers[key](state[key],action);
                return nextState;
            },
            {}
        );
    };
};

// const todoApp = (state = {}, action) =>{
//     return {
//         todos : todos(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilter(state.visibilityFilter,action)
//     }
// };

export default combineReducers;