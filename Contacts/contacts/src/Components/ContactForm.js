import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';


export class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
        }
    }
    performAction = (e) => {
        e.preventDefault();
        const item={
            name: this.refs.Name.value,
            number: this.refs.number.value
        };
        console.log(item);
        this.props.handleOnClick(item,this.props.action);
    };
    render(){
    return (
        <ModalContainer onClose={this.props.onCloseDiv}>
          {
            <ModalDialog onClose={this.props.onCloseDiv}>
                <form className="Add-items" name="ContactForm" type='POST' >
                    <div>
                        Name:
                        <input type="text" name= "Name" ref="Name" required />
                    </div>
                    <div>
                        Number:
                        <input type="number" name="number" ref="number" required />
                    </div>
                    <button type="submit" onClick= {this.performAction}>{this.props.action}</button>
                </form>
            </ModalDialog>
          }
        </ModalContainer>
        
    );
}
}