import React from 'react';
import {ContactForm} from '../Components/ContactForm';


export const Form = (props) =>{
    const handleOnClick = (item,action)=> props.onClickAdd(item);
    
    return (
        <form className="Add-items">
            
            <input type="text" onChange ={props.onChange} value = {props.value}/>
            <button type="button" onClick={()=>props.onClickContactFormButton()}>+ Add Contact</button>
            {/* <div onClick={props.onClickContactFormButton}> */}
            {/* add item */}
            {
                props.isShowingModal && <ContactForm isShowingModal={props.isShowingModal} action="Add" onCloseDiv={props.onCloseDiv} 
                handleOnClick={handleOnClick}/>
            }
            {/* </div> */}
        </form>
    );
}            