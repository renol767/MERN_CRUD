import React, { Component } from "react";
import axios from 'axios';
import TableRow from './TableRow';
import Table from 'react-bootstrap/Table';

export default class List extends Component {

    // Constructor
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/customer/').then(res => {
            this.setState({
                customers: res.data
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    DataTable() {
        return this.state.customers.map((res, i) => {
            return <TableRow obj={res} key={i} />;
        })
    }

    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}