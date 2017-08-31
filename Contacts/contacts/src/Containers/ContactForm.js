import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import AlertContainer from 'react-alert'


export class ContactForm extends React.Component {
    performAction = (e) => {
        e.preventDefault();
        const item={
            name: this.refs.Name.value,
            number: this.refs.number.value
        };
        console.log(item);
        const regex = new RegExp();
        if(item.name === ""){
            this.showAlert("Name is required!");
        }else if(item.number === "" || item.number.match(/^\d{10}$/) === null){
            this.showAlert("Number should contain 10 digits");
        }else{
            this.props.handleOnClick(item,this.props.action);
        }
        
    };

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
          type: 'error',
          icon: <img src="path/to/some/img/32x32.png" />
        })
    }
    render(){
    return (
        <ModalContainer onClose={this.props.onCloseDiv}>
          {
            <ModalDialog onClose={this.props.onCloseDiv}>
                <form className="Add-items" name="ContactForm" type='POST' >
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                    <div>
                        Name:
                        <input type="text" name= "Name" ref="Name" placeholder={this.props.itemName}  />
                        
                    </div>
                    <div>
                        Number:
                        <input type="text" name="number" ref="number" placeholder= {this.props.itemNumber} required={true} />
                    </div>
                    <button type="submit" onClick= {this.performAction}>{this.props.action}</button>
                </form>
            </ModalDialog>
          }
        </ModalContainer>
        
    );
}
}