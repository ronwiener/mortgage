import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './MortCreate.css';


class MortCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            date: '',
            amount: '',
            payment: '',
            overage: '',
            modal: false
        };
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/api/log', {
            method: 'POST',
            body: JSON.stringify( this.state),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            this.props.updateMortArray();
            this.setState({
                id: '',
                date: '',
                amount: '',
                payment: '',
                overage: ''
            })
        })
    }

    modalToggle = () => {
        this.setState({modal: !this.state.modal});
    }

    render() {
        return (
        
            <div id="divHeader">
               <h1 id="h1Text">Add a payment<Button id="hereButton" onClick={this.modalToggle}>Here</Button></h1>

               <Modal isOpen= {this.state.modal} toggle={this.modalToggle} className={this.props.className}>
               <ModalHeader id="modalHeader">Mortgage Payment Information</ModalHeader>
               <ModalBody>
                   <Form onSubmit={this.handleSubmit}>
                   <FormGroup>
                       <Label for="date">Date:</Label>
                       <Input id="date" type="date" name="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange}/>
                   </FormGroup>

                   <FormGroup>
                       <Label for="amount">Amount Due:</Label>
                       <Input id="amount" type="text" name="amount" value={this.state.amount} placeholder="enter amount due" onChange={this.handleChange}/>
                   </FormGroup>
                
                   <FormGroup>
                       <Label for="payment">Payment:</Label>
                       <Input id="payment" type="text" name="payment" value={this.state.payment} placeholder="enter payment" onChange={this.handleChange}/>
                   </FormGroup>
                
                   <FormGroup>
                       <Label for="overage">Overage/Underage:</Label>
                       <Input id="overage" type="text" name="overage" value={this.state.overage} placeholder="enter overage/underage" onChange={this.handleChange}/>
                   </FormGroup>
                   <Button id="submitButton" type="submit" color="primary">Submit</Button>
                   <h5 id="closer" onClick={this.modalToggle}>X</h5>
                   </Form>
               </ModalBody>
               </Modal>
            </div>

        )
    }

}

export default MortCreate;