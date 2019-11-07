// npm install expo-cli
// faire un compte sur prisma
// expo init MyServerName

//npm install --save apollo-client react-apollo apollo-cache-inmemory apollo-link-http graphql graphql-tag

import React from 'react';
import { ApolloProvider} from 'react-apollo';
import makeApolloClient from './apollo';
import {View, Text} from 'react-native'
import User from './Models/User'

export default class App extends React.Component {

 state = {
   client: null
 }

 async componentDidMount() {

  const token = "tokenID"
  const client = makeApolloClient(token);
  this.setState({ client });
 }

  render() {
    if (!this.state.client) {
      console.log("NO apollo client")
      return (
        <View><Text>HEYAAA</Text></View>
      )
  }
  else
  {
   return (
      <ApolloProvider client={this.state.client}>
        <User></User>
     </ApolloProvider>
   )
  }
  }
};