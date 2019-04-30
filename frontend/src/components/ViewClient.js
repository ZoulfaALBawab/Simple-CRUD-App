import React from 'react';
import './AllTable.css';
import Table from 'react-bootstrap/Table';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { clientsQuery } from '../queriesAndMutstions/clients'


class ViewClient extends React.Component {


    render() {

        const Clients = ({ viewClients }) => (

            <Query query={clientsQuery}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return (
                        data.allClients.map(client => (
                            { id, firstName: firstName.value, lastName: lastName.value, email: email.value }
                        ))
                    );
                }}
            </Query>
        );
    }

}
export default ViewClient
