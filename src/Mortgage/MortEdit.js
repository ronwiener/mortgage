import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './MortEdit.css';


class MortEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            date: '',
            amount: '',
            payment: '',
            overage: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.mortgage.id,
            date: this.props.mortgage.date,
            amount: this.props.mortgage.amount,
            payment: this.props.mortgage.payment,
            overage: this.props.mortgage.overage
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                <ModalHeader id="modalHeader">Update or correct a mortgage payment</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                       <FormGroup>
                           <Label for="date">Date</Label>
                           <Input id="date" type="date" name="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange}/>
                       </FormGroup>

                       <FormGroup>
                           <Label for="amount">Amount</Label>
                           <Input id="amount" type="text" name="amount" value={this.state.amount} placeholder="enter amount" onChange={this.handleChange}/>
                       </FormGroup>

                       <FormGroup>
                           <Label for="payment">Payment</Label>
                           <Input id="payment" type="text" name="payment" value={this.state.payment} placeholder="enter payment" onChange={this.handleChange}/>
                       </FormGroup>

                       <FormGroup>
                           <Label for="overage">Overage/Underage</Label>
                           <Input id="overage" type="text" name="overage" value={this.state.overage} placeholder="enter overage/underage" onChange={this.handleChange}/>
                       </FormGroup>
                       <Button type="submit" id="msbutton">Submit</Button>  
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default MortEdit;