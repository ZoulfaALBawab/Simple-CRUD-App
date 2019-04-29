import React from 'react';
import './EditClients.css';
import Table from 'react-bootstrap/Table';
import { Query } from "react-apollo";
import gql from "graphql-tag";


class EditClients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    }

  }


  render() {
    return (
      <div>
         <Table id="table" class="table table-bordered table-dark"  >
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>  <a href="#" class="btn btn-info btn-lg">
                <span class="glyphicon glyphicon-pencil"></span>
              </a></td>
              <td> <a href="#" class="btn btn-info btn-lg">
                <span class="glyphicon glyphicon-trash"></span>
              </a></td>
            </tr>
          </tbody>
        </Table>
      </div>

    )


  }
}

export default EditClients