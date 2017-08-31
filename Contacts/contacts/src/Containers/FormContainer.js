import React from 'react';

import {Form} from '../Components/Form';

export class FormContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShowingModal:false,

        }
        console.log("FormContainer Construct");
        this.addContact = this.addContact.bind(this);
        //this.showContactForm=this.showContactForm.bind(this);
    }
    render(){
        return (<Form value = {this.props.value} onChange={this.props.onChange}   onClickContactFormButton={this.handleClick} 
        isShowingModal={this.state.isShowingModal} onCloseDiv={this.handleClose} onClickAdd={this.addContact}/>  );
    }
    
    addContact(item){
        this.props.onClickAdd(item);
        this.handleClose();
    }
    
    
    handleClose = () => {
        this.setState({isShowingModal: false});}
    handleClick = () => this.setState({isShowingModal: true})
}
