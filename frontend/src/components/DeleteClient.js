import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { deleteClient } from '../queriesAndMutstions/clients'

class DeleteClient extends React.Component {
    render() {

        const DeleteTodo = ({id}) => {
            return (
              <Mutation
                mutation={deleteClient}
                update={(cache, { data: { deleteClient } }) => {
                  const { allTodos } = cache.readQuery({ query: allClients });
                  cache.writeQuery({
                    query: allClients,
                    data: { allClients: allClients.filter(e => e.id !== id)}
                  });
                }}
                >
                  </Mutation>
        
                );
              };
            }}
         
export default DeleteClient