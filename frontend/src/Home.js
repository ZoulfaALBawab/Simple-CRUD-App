import React from 'react';
import './Home.css';
import Table from 'react-bootstrap/Table';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    }

  }


  render() {
    return (
      <div>
        <h1>HellOoOo App Component</h1>
        <Table class="table table-bordered table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>View</th>
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
              <a href="#" class="btn btn-info btn-lg">
                <span class="glyphicon glyphicon-trash"></span>
              </a>
              <a href="#" class="btn btn-info btn-lg">
                <span class="glyphicon glyphicon-pencil"></span>
              </a>
              <a href="#" class="btn btn-info btn-lg">
                <span class="glyphicon glyphicon-trash"></span>
              </a>
            </tr>

          </tbody>
        </Table>
      </div>

    )


  }
}

export default Home