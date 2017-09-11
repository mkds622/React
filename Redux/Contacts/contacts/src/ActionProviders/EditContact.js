const editContact = (id , {name,number},{newName,newNumber}) =>{
    console.log({
        type: "UPDATE_CONTACT",
        name: name,
        number:number,
        newName : newName,
        newNumber : newNumber,
        id : id
    })
    return {
        type: "UPDATE_CONTACT",
        name: name,
        number:number,
        newName : newName,
        newNumber : newNumber,
        id : id
    };
} 

export default editContact;