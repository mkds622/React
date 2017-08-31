import React from 'react';
import {FormContainer} from '../Containers/FormContainer';
import {ListContainer} from '../Containers/ListContainer';

export const SearchComponent = (props) => {
    
    return (
        <div>
            <h2>Search</h2>
            <FormContainer onChange ={props.onChange} value = {props.value}  onClickAdd={props.onClickAdd}/>
            <ListContainer contactsToDisplay={props.contactsList} allContacts={props.allContacts}/>
        </div>
    );
}