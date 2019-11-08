import React from 'react';
import { ApolloProvider} from 'react-apollo';
import makeApolloClient from './apollo';
import {View, Text} from 'react-native'
import User from './Models/User'
import CreateNote from './Models/AddButton'

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
  console.log("apollo client")
   return (
    <ApolloProvider client={this.state.client}>
        <CreateNote></CreateNote>
     </ApolloProvider>
   )
  }
  }
};