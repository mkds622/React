import React from 'react';
import {ListItem} from '../Components/ListItem';


export class ListItemContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: props.index
    }
  }
  
  render() {
    return <ListItem   item={this.props.item} onClickUpdate={this.update} onClickDelete={this.delete} index={this.state.index} />
  }
  delete = (key) => {this.props.delete(key)};
  update = (key,item,newItem) => {
    this.props.update(key,item,newItem);
    };
  
}

  