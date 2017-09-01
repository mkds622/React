import React from 'react';
import {ContactFormContainer} from '../Containers/ContactFormContainer';
import {Button,Input} from 'semantic-ui-react';


export const Form = (props) =>{
    const handleOnClick = (item,action)=> props.onClickAdd(item);
    
    return (
        <form className="Add-items">
            
            <Input focus type="text" onChange ={props.onChange} value = {props.value}/>
            <ContactFormContainer action="Add" onCloseDiv={props.onCloseDiv} 
                handleOnClick={handleOnClick}/>
        </form>
    );
}            