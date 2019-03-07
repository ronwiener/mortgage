import React from 'react';
import { Container, Table, Button } from 'reactstrap';
import './MortTable.css';

const MortTable = (props) => {
    return (

        <Container>
            <h1 id= "tableHead">Mortgage Payment Record</h1>
            <Table id="table" bordered hover>
               <thead id="thead">
                  <tr id="headRow">
                    <th>No.</th>
                    <th>Date</th>
                    <th>Amount Due</th>
                    <th>Payment Amount</th>
                    <th>Overage/Underage</th>
                    <th></th>
                  </tr>
               </thead>
               <tbody>
                   {props.mortgages.map((mortgage, id) => {
                       return (
                        <tr key={id}>
                        <th scope="row">{mortgage.id}</th>
                        <td>{mortgage.date}</td>
                        <td>{mortgage.amount}</td>
                        <td>{mortgage.payment}</td>
                        <td>{mortgage.overage}</td>
                        <td>
                        <Button id={mortgage.id} className="updateButton" onClick={event => props.update(event, mortgage)}>Update</Button>
                        <Button id={mortgage.id} className="deleteButton" onClick={props.delete}>Delete</Button>
                        </td>
                    </tr>
                )
             })
            }
         </tbody>
        </Table>
        </Container>
    )
}

export default MortTable;