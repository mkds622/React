const deleteContact = (id) => {
    return {
        type : "DELETE_CONTACT",
        id : id
    };
}

export default deleteContact;