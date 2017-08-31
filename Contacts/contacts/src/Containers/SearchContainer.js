import React from 'react';

import {SearchComponent} from '../Components/SearchComponent';

export class SearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={ userInput : '',
                       contacts : [] ,
                        filteredContacts: [],
                        
                        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.addContact=this.addContact.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount(){
         const contactsList = JSON.parse(localStorage.getItem('Contacts')|| "[]") ;
         if(contactsList){
         this.setState( {contacts: contactsList,
                        filteredContacts:contactsList});
         }
    }
    render(){
        return (<SearchComponent value = {this.state.userInput} onChange={this.handleUserInput} 
        contactsList ={this.state.filteredContacts} allContacts={this.state.contacts} onClickAdd={this.addContact}/>);
    }
    handleUserInput(e){
        // console.log(e);
        // const filteredContacts = this.state.contacts; 
        // if(filteredContacts){
        //     //filter contacts according to input
        //     console.log(this.state.contacts);
        // }
        let filteredContacts =[];
        const contacts = this.state.contacts;
        contacts.forEach(contact => {
            if(contact.name.toLowerCase().indexOf(e.target.value.toLowerCase())>= 0){
                filteredContacts.push(contact);
            }
        })
        this.setState({
          userInput: e.target.value,
          filteredContacts: filteredContacts
        });
    }  
    addContact(item){
        const contacts=this.state.contacts;
        contacts.push(item);
        localStorage.setItem('Contacts',JSON.stringify(contacts));
        this.setState({
            contacts:contacts
        });
    }
}

