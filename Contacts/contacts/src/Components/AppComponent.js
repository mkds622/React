import React from 'react';
import Wrapper from '../styles/App.css';
import {SearchContainer} from '../Containers/SearchContainer';


export const AppComponent = () => {
    console.log("AppComponent")
    return (
    < div className = "App" > 
        < div className = "App-header" > 
            < h1 > Contacts </h1> 
        </div>
        <SearchContainer className="Wrapper" />
  </div>
  );
}