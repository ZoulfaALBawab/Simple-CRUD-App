import React from 'react';
import './AllTable.css';
import Table from 'react-bootstrap/Table';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { clientsQuery } from '../queriesAndMutstions/clients'

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
            <td>1</td>
            <td>Mhd</td>
            <td>Bwb</td>
            <td>mhd@bwb</td>

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