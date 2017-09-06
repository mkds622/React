const counterReducer = (state = [0],action) => {
    switch(action.type){
        case 'ADD_COUNTER':
                return [
                    ...state , 0
                ];
        case 'REMOVE_COUNTER':
                return [
                    ...state.slice(0,state.length-1),
                ];
        case 'INCREMENT_COUNTER':
                return [
                    ...state.slice(0,action.index),
                    state[action.index]+1,
                    ...state.slice(action.index+1)
                ];
        case 'DECREMENT_COUNTER':
                return [
                    ...state.slice(0,action.index),
                    state[action.index]-1,
                    ...state.slice(action.index+1)
                ];
        default:
                return state;
    }
    return state;
}
export default counterReducer;