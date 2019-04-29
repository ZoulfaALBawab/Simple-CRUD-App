import React from './node_modules/react';
import './EditClients.css';
import Table from './node_modules/react-bootstrap/Table';
import { Query } from "./node_modules/react-apollo";
import gql from "./node_modules/graphql-tag";


class EditClients extends React.Component {
   


  render() {
    const Clients = ({ getClients }) => (
      <Query query={clientsQuery}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (

<Table id="table" class="table table-bordered table-dark" onChange={getClients}>
{data.allClients.map(client =>(
  <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{client.id}</td>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{client.email}</td>
                <td>
              
               
                </td>
                <td> 
                  
                  <a href="#" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-trash"></span>
                </a></td>
              </tr>
            </tbody>
))}
</Table>            
          );
        }}
      </Query>
    );

   

   
  }
}

export default EditClients