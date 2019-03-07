import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MortCreate from './MortCreate';
import MortTable from './MortTable';
import MortEdit from './MortEdit';

class MortIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mortgages: [],
            updatePressed: false,
            mortgageToUpdate: {}
        }
    }
    componentDidMount() {
        this.fetchMortgage()
    }

    mortgageUpdate = (event, mortgage) => {
        fetch(`http://localhost:3000/api/log/${mortgage.id}`, {
            method: 'PUT',
            body: JSON.stringify({ log: mortgage }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then(res => {
                this.setState({ updatePressed: false })
                this.fetchMortgage();
            })
    }

    setUpdatedMortgage = (event, mortgage) => {
        this.setState({
            mortgageToUpdate: mortgage,
            updatePressed: true
        })
    }

    mortgageDelete = (event) => {
        fetch(`http://localhost:3000/api/log/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ log: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchMortgage())
    }

    fetchMortgage = () => {
        fetch('http://localhost:3000/api/log', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({
                    mortgages: logData
                })
            })
    }

    render() {
        const mortgages =
            this.state.mortgages.length >= 1 ?
                <MortTable mortgages=
                    {this.state.mortgages} delete=
                    {this.mortgageDelete} update=
                    {this.setUpdatedMortgage} /> :
                <div></div>

        return (
            <Container>
                <Row>
                    <Col>
                        <MortCreate token=
                            {this.props.token}
                            updateMortArray=
                            {this.fetchMortgage} />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col md="12">
                        {mortgages}
                    </Col>
                </Row>
                <Col md="12">
                    {this.state.updatePressed ?
                        <MortEdit t=
                            {this.state.updatePressed}
                            update={this.mortgageUpdate}
                            mortgage=
                            {this.state.mortgageToUpdate} /> :
                        <div></div>
                    }
                </Col>
            </Container>
        )
    }
}

export default MortIndex;