import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { createClient } from '../queriesAndMutstions/clients';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Mutation } from 'react-apollo';
import './AddClient.css';



class AddClient extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: ''

        }
        this.handleChangefirstName = this.handleChangefirstName.bind(this)
        this.handleChangelastName = this.handleChangelastName.bind(this)
        this.handleChangeemail = this.handleChangeemail.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    handleChangefirstName(event) {
        this.setState({ firstName: event.target.value })
        console.log(this.state.firstName)
    }
    handleChangelastName(event) {
        this.setState({ lastName: event.target.value })
        console.log(this.state.lastName)
    }
    handleChangeemail(event) {
        this.setState({ email: event.target.value })
        console.log(this.state.email)
    }

    submitForm = () => {

        this.props.createClient({
            variables: {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                email: this.email.value

            }
        })

    }





    render() {
        return (
            <Mutation mutation={createClient}>
                {(createClient, { data, loading }) => {
                    return (
                        <div>
                            <h2 className="h2" >Add New Client</h2>
                            <Form>
                                <Form.Group>
                                    <div class="col-xs-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter the First Name" class="form-control" id="ex2" value={this.state.firstName} onChange={this.handleChangefirstName} />
                                    </div>

                                </Form.Group>

                                <Form.Group >
                                    <div class="col-xs-3">

                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter the Last Name" />
                                    </div>

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <div class="col-xs-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the Email" />
                                    </div>

                                </Form.Group>
                                <br />

                                <Button className="btn" variant="secondary" >Add Client</Button>
                            </Form>

                        </div>

                    )
                }
                }

            </Mutation>

        )


    }
}

export default AddClient