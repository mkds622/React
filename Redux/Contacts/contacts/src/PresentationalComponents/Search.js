import React from 'react';
import {Segment,Input} from 'semantic-ui-react';
import setFilterText from '../ActionProviders/SetFilterText';
import {connect} from 'react-redux';
import ListContainer from '../ContainerComponents/ListContainer';

let Search = ({dispatch}) => (
    <Segment>
                <Input focus type="text" placeholder='Search...'
                    onChange= {(e)=>{
                        dispatch(setFilterText(e.target.value));
                    }}></Input>
                <ListContainer />
    </Segment>
);

Search = connect()(Search);

export default Search;