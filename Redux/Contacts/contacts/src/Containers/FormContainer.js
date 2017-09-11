import React from 'react';

import {Form} from '../Components/Form';
import addContact from '../ActionProviders/AddContact';
import PropTypes from 'prop-types';

export class FormContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        console.log("FormContainer Construct");
        this.addContactFunction = this.addContactFunction.bind(this);
        //this.showContactForm=this.showContactForm.bind(this);
    }
    render(){
        return (<Form value = {this.props.value} onChange={this.props.onChange}   
        onClickAdd={this.addContactFunction}/>  );
    }
    
    addContactFunction(item){
        const {store} = this.context;
        store.dispatch(addContact(item));
        localStorage.setItem('Contacts',JSON.stringify(store.getState()));
    }
    
    static contextTypes = {
        store: PropTypes.object.isRequired
    }  
    
}
