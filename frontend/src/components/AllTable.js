import React from 'react';
import './AllTable.css';
import Table from 'react-bootstrap/Table';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ViewClient from "./ViewClient";
import UpdateClient from "./UpdateClient";
import DeleteClient from "./DeleteClient";



class AllTable extends React.Component {



  render() {
    return (



      <Table id="table" class="table table-bordered table-dark" >
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
            <div  onChange={this.viewClients}>
            <td>{this.client.id}</td>
            <td>{this.client.firstName}</td>
            <td>{this.client.lastName}</td>
            <td>{this.client.email}</td>
            </div>
            <td>
              <a href="#" class="btn btn-info btn-lg">
                <span class="glyphicon glyphicon-pencil"></span>
              </a>
            </td>
            <td>

              <a href="#" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-trash"></span>
              </a></td>
          </tr>
        </tbody>
 </Table>
    );
  }
}
   

   

   


export default AllTable