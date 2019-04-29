import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { createClient } from '../queriesAndMutstions/clients';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Mutation } from 'react-apollo';
import './AddClient.css';



class AddClient extends React.Component {



    render() {
        let firstName;
        let lastName;
        let email;
        return (
            <Mutation mutation={createClient}>
                {(createClient, { data, loading }) => {
                    return (
                        <div>
                            <h2 className="h2" >Add New Client</h2>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault();
                                    createClient({ variables: { firstName: firstName.value, lastName: lastName.value, email: email.value } });
                                    firstName.value = '';
                                    lastName.value = '';
                                    email.value = '';
                                }}
                            >
                                <Form.Group>
                                    <div class="col-xs-3">
                                        <Form.Label  >First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter the First Name" class="form-control" id="ex2" ref={node => {
                                            firstName = node;
                                        }} />
                                    </div>

                                </Form.Group>

                                <Form.Group >
                                    <div class="col-xs-3">

                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter the Last Name" ref={node => {
                                            firstName = node;
                                        }} />
                                    </div>

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <div class="col-xs-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the Email" ref={node => {
                                            firstName = node;
                                        }} />
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