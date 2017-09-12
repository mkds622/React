import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './PresentationalComponents/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import contactsAppReducer from './Reducers/contactsAppReducer';


ReactDOM.render(
    <Provider store = {createStore(contactsAppReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        < App />
    </Provider>, 
    document.getElementById('root'));
    
registerServiceWorker();
