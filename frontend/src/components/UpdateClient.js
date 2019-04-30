import React from 'react';
import Table from 'react-bootstrap/Table';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { clientsQuery } from "../queriesAndMutstions/clients"
import { updateClient } from "../queriesAndMutstions/clients"

class UpdateClient extends React.Component {

  
  
  render() {

const Clients = () => (
  <Query query={clientsQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allClients.map(({ id, firstName, lastName, email }) => {
 
        return (
          <Mutation mutation={updateClient} key={id}>
          return(
            {updateClient => (onSubmit={e => e.preventDefault();
                    updateClient({ variables: { id, firstName: firstName, lastName: lastName, email: email })}
                    firstName = '';
                    lastName = '';
                    email = '';                  }}
                  
             )}
          )
          </Mutation>
        );
      });
    }}
  </Query>
);
    }
  }
  export default UpdateClient;