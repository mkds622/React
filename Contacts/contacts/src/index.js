import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(< App / >, document.getElementById('root'));
registerServiceWorker();