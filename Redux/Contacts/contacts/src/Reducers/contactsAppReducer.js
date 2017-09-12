import contacts from './contacts';
import filterText from './filterText';
import {combineReducers} from 'redux';
const contactsAppReducer = combineReducers({
    contacts,
    filterText
});

export default contactsAppReducer;