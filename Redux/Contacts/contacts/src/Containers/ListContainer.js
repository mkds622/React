import React from 'react';
//import ReactDOM from 'react-dom';
import {SegmentGroup} from 'semantic-ui-react';
import {ListItemContainer} from '../Containers/ListItemContainer';
import PropTypes from 'prop-types';
import editContact from '../ActionProviders/EditContact';
import deleteContact from '../ActionProviders/DeleteContact'; 

export class ListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: props.contactsToDisplay
        };
        this.createList = this.createList.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe=store.subscribe(()=>this.forceUpdate());
    }
    componentWillUnmount(){
        this.unsubscribe();
    }

    createList(contactsToDisplay){
        return (
            <SegmentGroup className='listSegment'>
            {console.log(contactsToDisplay)}   
            {contactsToDisplay.map((item,i) => <ListItemContainer key={i} index={i} update ={this.updateItem} delete={this.deleteItem} item={item} />)}
                
            </SegmentGroup>
        );
        
    }

    updateItem(i,item,newItem){
        const {store} = this.context;
        const contactsToDisplay =this.state.contacts;
        // allContacts.forEach(function(contact) {
        //     if(contact.name === item.name){
        //         contact.name = newItem.name;
        //         contact.number = newItem.number;
        //         contactsToDisplay[i].number = newItem.number;
        //         contactsToDisplay[i].name = newItem.name;
        //         return;
        //     }
        // }, this);
        store.dispatch(editContact(i,{name:item.name,number:item.number},{newName : newItem.name, newNumber : newItem.number}));
        localStorage.setItem('Contacts',JSON.stringify(store.getState()));
        this.setState({
            contacts:contactsToDisplay
        });
    }

    deleteItem(i){
        console.log(i);
        // const allContacts = JSON.parse(localStorage.getItem('Contacts')|| "[]") ;
        
        const contactsToDisplay =this.state.contacts;
        // allContacts.forEach(function(contact,index) {
        //     if(contact.name === contactsToDisplay[i].name){
                
        //         contactsToDisplay.splice(i,1);
        //         console.log(contactsToDisplay);
        //         i=index;
        //         allContacts.splice(i,1);
        //         return;
        //     }
        // }, this);
        // console.log(contactsToDisplay);
        const {store} = this.context;
        store.dispatch(deleteContact(i));
        localStorage.setItem('Contacts',JSON.stringify(store.getState()));
        this.setState({
            contacts:contactsToDisplay
        });
    }
    render(){
    return (<div style={{padding: "20px 0px" }}>{this.createList(this.props.contactsToDisplay)}</div>);
    }
    static contextTypes = {
        store: PropTypes.object.isRequired
    }  
}
