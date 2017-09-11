import React from 'react';
import Wrapper from '../styles/App.css';
import {SearchContainer} from '../Containers/SearchContainer';
import {Header} from 'semantic-ui-react';


export const AppComponent = (props,{store}) => {
    console.log("AppComponent")
    return (
    < div className = "App" > 
        < div className = "App-header" > 
            < Header color='teal' size="huge"> Contacts </Header> 
        </div>
        <SearchContainer className="Wrapper" />
  </div>
  );
}