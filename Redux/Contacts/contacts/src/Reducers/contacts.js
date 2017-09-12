const ContactsReducer = (state= [] , action) => {
    switch(action.type){
        case "ADD_CONTACT":
            return [
                ...state,
                {
                    name : action.name,
                    number : action.number,
                    id : action.id
                }
            ];
        case "UPDATE_CONTACT":
            let indexInArray;
            for(var i=0;i<state.length;++i){
                if(state[i].name ===action.name && state[i].number === action.number){
                    indexInArray= i;
                }
            }
            debugger;
            return [
                ...state.slice(0,indexInArray),
                {
                    ...state[indexInArray],
                    name : action.newName,
                    number : action.newNumber
                },
                ...state.slice(indexInArray+1)
            ];
        case "DELETE_CONTACT":
            // return state.filter( contact =>{
            //     if(contact.id !== action.id){
            //         return contact;
            //     }
            // });
            debugger;
            return [
                ...state.slice(0,action.id),
                ...state.slice(action.id+1)
            ];
        default:
            return state;
    }
}

export default ContactsReducer;