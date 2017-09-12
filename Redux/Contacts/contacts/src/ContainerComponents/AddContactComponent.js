import addContact from '../ActionProviders/AddContact';
import {connect} from 'react-redux';
import AddContact from '../PresentationalComponents/AddContact';
import React from 'react';

const mapDispatchToProps = dispatch => {
    return {
        onClickAdd : (item,action)=>{
                            dispatch(addContact(item));
                            }
    }
}

const AddContactComponent = connect(null,mapDispatchToProps)(AddContact);

export default AddContactComponent;