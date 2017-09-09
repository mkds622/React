import React from 'react';
import {FormContainer} from '../Containers/FormContainer';
import {ListContainer} from '../Containers/ListContainer';
import {Header} from 'semantic-ui-react';

export const SearchComponent = (props) => {
    
    return (
        <div style={{display: "inline-block",padding:"20px 0px"}}>
            <Header content="Search" size="large" />
            <FormContainer onChange ={props.onChange} value = {props.value}  onClickAdd={props.onClickAdd}/>
            <ListContainer contactsToDisplay={props.contactsList} allContacts={props.allContacts}/>
        </div>
    );
}