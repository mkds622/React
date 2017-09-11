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
            let x= [...state];
            let temp= x.filter( contact =>{
                debugger;
                if(contact.id !== action.id){
                    return contact;
                }
                // contact.name = action.newName;
                // contact.number = action.newNumber;
                let newObject= {
                    ...contact,
                    name: action.newName,
                    number: action.newNumber
                };
                console.log(contact);
                //return contact;
            });
            console.log(x);
            console.log(state);
            return temp;
        case "DELETE_CONTACT":
            return state.filter( contact =>{
                if(contact.id !== action.id){
                    return contact;
                }
            });
        default:
            return state;
    }
}

export default ContactsReducer;