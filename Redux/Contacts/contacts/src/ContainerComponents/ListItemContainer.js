import {connect} from 'react-redux';
import ListItem from '../PresentationalComponents/ListItem';
import editContact from '../ActionProviders/EditContact';
import deleteContact from '../ActionProviders/DeleteContact';

const mapStateToListItemProps = (state,ownProps) => {
    return {
        contact : ownProps.item
    }
};

const mapDispatchToListItemProps = (dispatch,ownProps) => {
    return {
        updateItem: (newItem,action)=>{
            dispatch(editContact(ownProps.item.id,
                {name:ownProps.item.name,number:ownProps.item.number},
                {newName:newItem.name,newNumber: newItem.number}));
        },
        deleteItem: (id) => {
            dispatch(deleteContact(id));
        }
    }
}

const ListItemContainer = connect (mapStateToListItemProps, mapDispatchToListItemProps ) (ListItem);
export default ListItemContainer;