import React from 'react';
import {SegmentGroup} from 'semantic-ui-react';
import ListItemContainer from '../ContainerComponents/ListItemContainer';

const List = ({filteredContacts}) => (
    <SegmentGroup >
        {filteredContacts.map((item,i) => <ListItemContainer key={i} index={i}  
                item={item} />)}
    </SegmentGroup>
);
export default List;