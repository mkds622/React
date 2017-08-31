import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {ContactForm} from '../Components/ContactForm';


export const ListItem = (props) => {
    const update = (item,action) => {return props.onClickUpdate(props.index,{name:props.item.name,number:props.item.number},item); };
    const deleteitem = () => { 
      props.onClickDelete(props.index); 
      return props.onCloseDiv()};
   
   return <div onClick={props.onClickDiv}>
      {
        props.item.name
      }
      {
      props.isShowingModal &&
      <ModalContainer onClose={props.onCloseDiv}>
        {
          <ModalDialog onClose={props.onCloseDiv}>
            <h3>{props.item.name}</h3>
            <p>{props.item.number}</p>
            <button onClick={props.handleUpdateClick}>Update</button>
              {
                  props.isShowingUpdateModal &&
                  <ContactForm isShowingModal={props.isShowingUpdateModal} action="Update" onCloseDiv={props.handleUpdateClose} 
                    handleOnClick={update}/>
              }
            <button onClick={deleteitem}>Delete</button>
          </ModalDialog>
        }
      </ModalContainer>
    }
  </div>
}