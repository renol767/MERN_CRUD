import React, { Component } from "react";

// Import Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import Axios (untuk Handle HTTP Request)
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default class Create extends Component {

    // State untuk Menerima Inputan
    constructor(props) {
        super(props)

        // Set Fungsi
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Set State
        this.state = {
            name: '',
            email: '',
            city: '',
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeCity(e) {
        this.setState({ city: e.target.value })
    }

    state = {
        redirect: false
    }

    onSubmit(e) {
        e.preventDefault()

        const dataObject = {
            name: this.state.name,
            email: this.state.email,
            city: this.state.city
        };

        // POST Request Menggunakan Axios
        axios.post('http://localhost:4000/customer/create', dataObject).then(() => this.setState({ redirect: true }));

        this.setState({ name: '', email: '', city: '' })

    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/list" />
        }
        return (
            <div className="form-wrapper">
                {/* Form for Input Data */}
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={this.state.email} onChange={this.onChangeEmail} />
                    </Form.Group>

                    <Form.Group controlId="City">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" value={this.state.city} onChange={this.onChangeCity} />
                    </Form.Group>

                    <br></br>

                    <Button variant="primary" size="lg" block="block" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}