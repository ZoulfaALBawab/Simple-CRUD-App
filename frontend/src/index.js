import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Home from "./Home.js";

 
const client = new ApolloClient({
    uri: " http://127.0.0.1:8000"
  });
  
  
//    client
//     .query({
//       query: gql`
//         {
//           favorites(albums: "title") {
//             albums
//           }
//         }
//       `
//     })
//     .then(result => console.log(result));
  
//   const Users = () => (
//     <Query
//       query={gql`
//           {
//             favorites(albums: "") {
//             albums
//           }
//           }
//         `}
//     >
//       {({ loading, error, data }) => {
//         if (loading) return <p>Loading...</p>;
//         if (error) return <p>Error :(</p>;
  
//         return data.favorites.map(({ albums }) => (
  
//           <div key={albums}>
//             <p>{albums}: {}</p>
//           </div>
//         ));
//       }}
//     </Query>
//   );
  
  
  const App = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello Client Side :D ! </h2>
        <Home />
      </div>
    </ApolloProvider>
  );
  
  
  
  
  
  ReactDOM.render(<App />, document.getElementById('root'));
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();