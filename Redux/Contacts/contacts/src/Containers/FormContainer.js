import React from 'react';

import {Form} from '../Components/Form';

export class FormContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        console.log("FormContainer Construct");
        this.addContact = this.addContact.bind(this);
        //this.showContactForm=this.showContactForm.bind(this);
    }
    render(){
        return (<Form value = {this.props.value} onChange={this.props.onChange}   
        onClickAdd={this.addContact}/>  );
    }
    
    addContact(item){
        this.props.onClickAdd(item);
    }
    
    
    
}
