// standard libs

// other libs
import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// standard components

// custom components
import Aqms from "../atoms/Aqms";

// apollo client setup
const client = new ApolloClient({
  uri: "https://www.erebos.xyz/api/graphql"
});

class TestDaten extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="MessdatenList card">
          <ul className="Daten">
            <Aqms />
          </ul>
        </div>
      </ApolloProvider>
    );
  }
}

export default TestDaten;
