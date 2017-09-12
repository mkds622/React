import React from 'react';
import {ContactForm} from '../PresentationalComponents/ContactForm';
import PropTypes from 'prop-types';


export class ContactFormContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name : "",number:"",open:false,messageHidden:true
        };
        this.performAction=this.performAction.bind(this);
        //this.submitFormButtonClick=this.submitFormButtonClick.bind(this);
    }
    handleNameChange=(e)=>{
        this.setState({
            name: e.target.value
        });
    }
    handleNumberChange=(e)=>{
        this.setState({
            number: e.target.value
        });
    }
    performAction(e) {
        e.preventDefault();
        console.log(this.state.name,this.state.number);
        const item={
            name: this.state.name,
            number: this.state.number
        };

        if(item.number.match(/^\d{10}$/) === null){
            this.setState({messageHidden:false});
        }else{
            this.setState({
                open:false
            });
            this.props.handleOnClick(item,this.props.action);
            
        }
        
    }
    

    alertOptions = {
        offset: 14,
        position: 'bottom left',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
    }
    showAlert = (msg) => {
        this.msg.show(msg, {
          time: 2000,
          type: 'error'
        })
    }
    handleOpenModalClick=()=>{
        this.setState({
            open:true
        });
    }
    handleCloseModalClick=()=>{
        this.setState({
            open:false
        });
    }
    render(){
    return (
        <ContactForm    messageHidden={this.state.messageHidden}
                        handleOpenModalClick={this.handleOpenModalClick} action={this.props.action}
                        open={this.state.open}
                        performAction={this.performAction}
                        itemName={this.props.itemName} handleNameChange={this.handleNameChange}
                        itemNumber={this.props.itemNumber} handleNumberChange={this.handleNumberChange}/>
    )
}
static contextTypes = {
    store: PropTypes.object.isRequired
}  
}