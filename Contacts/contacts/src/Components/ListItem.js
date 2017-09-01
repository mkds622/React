import React from 'react';
import {Header,List,Modal,Button,Segment} from 'semantic-ui-react';
import {ContactFormContainer} from '../Containers/ContactFormContainer';



export const ListItem= (props) => {
  const update = (item, action) => { return props.onClickUpdate(props.index, { name: props.item.name, number: props.item.number }, item); };
  const deleteitem = () => {
    props.onClickDelete(props.index);
  };

  return (<Modal
    trigger={<Segment size="large">{props.item.name}</Segment>}
     size="small">
    <Modal.Content>
      <div>
      <Header as='h1' content={props.item.name}></Header>
      <Header as='h3' content={props.item.number}></Header>
      </div>
    </Modal.Content>
    <Modal.Actions>
      <ContactFormContainer action="Update" handleOnClick={update} itemName={props.item.name} itemNumber={props.item.number} />
      <Button basic onClick={deleteitem}>Delete</Button>
    </Modal.Actions>
  </Modal>
  );
};
