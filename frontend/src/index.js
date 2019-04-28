import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import EditClients from "../src/components/EditClients";
import AddClient from "../src/components/AddClient"
 import 'bootstrap/dist/css/bootstrap.min.css';



const client = new ApolloClient({
  uri: " http://127.0.0.1:8000/graphiql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
       <AddClient / >
       <EditClients />
    </div>
  </ApolloProvider>
);





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();