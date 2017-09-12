import {connect} from 'react-redux';
import List from '../PresentationalComponents/List';
const getFilteredContacts=(contacts,filterText) => {
    return contacts.filter(contact => {
        if(contact.name.toLowerCase().indexOf(filterText.toLowerCase())>= 0){
            return contact;
        }
    });
}

const mapStateToListProps = (state) =>{
    return {
        filteredContacts : getFilteredContacts(
            state.contacts,
            state.filterText
        )
    }
}

const ListContainer = connect (
    mapStateToListProps,
    null
)(List);

export default ListContainer;