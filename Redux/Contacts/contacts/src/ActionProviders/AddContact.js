let id=0;
const addContact = ({name,number}) =>{
    return {
        type: "ADD_CONTACT",
        name : name,
        number : number,
        id : id++
    };
} 

export default addContact;