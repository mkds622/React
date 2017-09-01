import React from 'react';
//import ReactDOM from 'react-dom';
import {List,SegmentGroup} from 'semantic-ui-react';
import {ListItemContainer} from '../Containers/ListItemContainer';

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
    createList(contactsToDisplay){
        return (
            <SegmentGroup className='listSegment' divided inverted>
               
            {contactsToDisplay.map((item,i) => <ListItemContainer key={i} index={i} update ={this.updateItem} delete={this.deleteItem} item={item} />)}
                
            </SegmentGroup>
        );
        
    }

    updateItem(i,item,newItem){
        const allContacts = JSON.parse(localStorage.getItem('Contacts')|| "[]") ;
        const contactsToDisplay =this.state.contacts;
        allContacts.forEach(function(contact) {
            if(contact.name === item.name){
                contact.name = newItem.name;
                contact.number = newItem.number;
                contactsToDisplay[i].number = newItem.number;
                contactsToDisplay[i].name = newItem.name;
                return;
            }
        }, this);
        localStorage.setItem('Contacts',JSON.stringify(allContacts));
        this.setState({
            contacts:contactsToDisplay
        });
    }

    deleteItem(i){
        console.log(i);
        const allContacts = JSON.parse(localStorage.getItem('Contacts')|| "[]") ;
        
        const contactsToDisplay =this.state.contacts;
        allContacts.forEach(function(contact,index) {
            if(contact.name === contactsToDisplay[i].name){
                
                contactsToDisplay.splice(i,1);
                console.log(contactsToDisplay);
                i=index;
                allContacts.splice(i,1);
                return;
            }
        }, this);
        console.log(contactsToDisplay);
        localStorage.setItem('Contacts',JSON.stringify(allContacts));
        this.setState({
            contacts:contactsToDisplay
        });
    }
    render(){
    return (<div style={{padding: "20px 0px" }}>{this.createList(this.props.contactsToDisplay)}</div>);
    }
    
}
