import gql from 'graphql-tag';

export const clientsQuery = gql`
  query allClients {
    allClients {
      id
      firstName
      lastName
      email
    }
  }
`;

export const createClient = gql`
  mutation createClient($firstName: String!,$lastName: String!, $email: String!) {
    createClient(firstName: $firstName, lastName: $lastName, email: $email) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const updateClient = gql`
  mutation updateClient($firstName: String!,$lastName: String!, $email: String!) {
    updateClient(firstName: $firstName, lastName: $lastName, email: $email) {
      id
      firstName
      lastName
      email
    }
  }
`;


export const deleteClient = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
    }
  }
`;

