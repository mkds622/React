import React from 'react';
import {Button,Header,Modal,Form,Segment,Message} from 'semantic-ui-react';
export const ContactForm = (props) =>{
    return(
        <Modal trigger={<Button basic type="button" onClick={props.handleOpenModalClick}>{props.action} Contact</Button>}
        basic size='small' >
            <Message hidden={props.messageHidden} negative>
                <Message.Header>Number should contain exactly 10 digits</Message.Header>    
            </Message>
            <Header content={props.action + " Contact"}/>
            <Modal.Content>
            <Segment>
                <Form onSubmit={(e)=>props.performAction(e)}>
                    <Form.Field>
                        <label>Name:</label>
                        <Form.Input focus type="text" name="Name" placeholder={props.itemName} onChange={props.handleNameChange} required/>
                    </Form.Field>
                    <Form.Field>
                        <label>Number:</label>
                        <Form.Input focus type="text" name="number" placeholder= {props.itemNumber} onChange={props.handleNumberChange} required/>
                    </Form.Field>
                    <Button type="submit"  basic  primary >
                    {props.action}
                    </Button>
                </Form>
                
            </Segment>
            </Modal.Content>
            <Modal.Actions>
                
            </Modal.Actions>
        </Modal>    
        
    );
}