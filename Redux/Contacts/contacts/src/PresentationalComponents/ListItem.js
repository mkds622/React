import React from 'react';
import {Header,Modal,Button,Segment} from 'semantic-ui-react';
import {ContactFormContainer} from '../ContainerComponents/ContactFormContainer';

const ListItem = ({contact,updateItem,deleteItem}) => (
    <Modal
    trigger={<Segment size="large">{contact.name}</Segment>}
     size="small">
    <Modal.Content>
      <div>
      <Header as='h1' content={contact.name}></Header>
      <Header as='h3' content={contact.number}></Header>
      </div>
    </Modal.Content>
    <Modal.Actions>
      <ContactFormContainer action="Update" handleOnClick={(newItem,action)=>updateItem(newItem,action)} itemName={contact.name} itemNumber={contact.number} />
      <Button basic onClick={()=>deleteItem(contact.id)}>Delete</Button>
    </Modal.Actions>
  </Modal>
);
export default ListItem;