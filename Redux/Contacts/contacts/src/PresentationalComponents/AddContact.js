import React from 'react';
import {ContactFormContainer} from '../ContainerComponents/ContactFormContainer';

const AddContact = ({onClickAdd}) =>(
    <ContactFormContainer action = "Add" handleOnClick={onClickAdd} />
)

export default AddContact;