import React from 'react';

import {SearchComponent} from '../Components/SearchComponent';
import addContact from '../ActionProviders/AddContact';
import PropTypes from 'prop-types';

export class SearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={ userInput : '',
                        filteredContacts: [],
                        
                        };
        
        this.handleUserInput = this.handleUserInput.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe=store.subscribe(()=>this.forceUpdate());
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    componentWillMount(){
        const {store} = this.context;
         const contactsList = JSON.parse(localStorage.getItem('Contacts')|| "[]") ;
         if(contactsList){
            contactsList.forEach(contact => store.dispatch( addContact(contact)));
         this.setState( {
                        filteredContacts: store.getState()});
         }

    }
    render(){
        
        return (<SearchComponent value = {this.state.userInput} onChange={this.handleUserInput} 
        contactsList ={this.state.filteredContacts} />);
    }
    handleUserInput(e){
        const {store} = this.context;
        let filteredContacts =[];
        const contacts = store.getState(); 
        filteredContacts = contacts.filter(contact => {
            if(contact.name.toLowerCase().indexOf(e.target.value.toLowerCase())>= 0){
                return contact;
            }
        })
        this.setState({
          userInput: e.target.value,
          filteredContacts: filteredContacts
        });
    }
    static contextTypes = {
        store: PropTypes.object.isRequired
    }  
    
}

