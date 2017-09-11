import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import contactsReducer from './Reducers/ContactsReducer.js';


ReactDOM.render(
<Provider store = {createStore(contactsReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    < App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();