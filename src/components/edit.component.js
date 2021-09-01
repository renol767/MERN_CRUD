import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default class Edit extends Component {


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
        // Redirect
    }

    componentDidMount() {
        axios.get('http://localhost:4000/customer/edit/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    city: res.data.city
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        redirect: false
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

    onSubmit(e) {
        e.preventDefault()

        const dataObject = {
            name: this.state.name,
            email: this.state.email,
            city: this.state.city
        };

        // PUT Request Menggunakan Axios
        axios.put('http://localhost:4000/customer/update/' + this.props.match.params.id, dataObject).then((res) => {
            this.setState({ redirect: true })
            console.log(res.data)
            console.log('Update Data Berhasil')
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