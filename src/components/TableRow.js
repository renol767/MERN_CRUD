import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
    }

    state = {
        redirect: false
    }

    deleteData() {
        axios.delete('http://localhost:4000/customer/delete/' + this.props.obj._id).then((res) => {
            this.setState({ redirect: true })
            console.log('Data Deleted')
        }).catch((error) => {
            console.log(error)
        })

    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/list' />;
        }
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.city}</td>
                <td>
                    <Link className="edit-link" to={"/edit/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteData} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}