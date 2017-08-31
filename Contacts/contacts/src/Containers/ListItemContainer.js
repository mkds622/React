import React from 'react';
import {ListItem} from '../Components/ListItem';


export class ListItemContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShowingModal: false,
      isShowingUpdateModal:false,
      index: props.index
    }
  }
  
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    return <ListItem onClickDiv={this.handleClick} onCloseDiv={this.handleClose}  item={this.props.item} isShowingModal={this.state.isShowingModal}
    onClickUpdate={this.update} onClickDelete={this.delete} index={this.state.index} isShowingUpdateModal= {this.state.isShowingUpdateModal}
    handleUpdateClick = {this.handleUpdateClick} handleUpdateClose={this.handleUpdateClose}/>
  }
  delete = (key) => {this.props.delete(key)};
  update = (key,item,newItem) => {
    this.props.update(key,item,newItem);
    this.handleUpdateClose();
    };
  handleUpdateClose = () => {
    this.setState({isShowingUpdateModal: false});}
  handleUpdateClick = () => this.setState({isShowingUpdateModal: true})
}

  