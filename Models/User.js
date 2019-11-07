import React from 'react'
import { View,  StyleSheet, Text, Button, TextInput, FlatList, Alert} from 'react-native'

import {Query} from 'react-apollo';
import gql from 'graphql-tag'

export default class User extends React.Component {
    render () {
        return (
          <Query  
            query={FETCH_USERS}  
          >  
            {
              ({data, error, loading }) => {
                console.log(data)
                if (loading) return ( <View><Text>LOADINGLOADING LOADING</Text></View>)
                if (!data.users) return null;
                return (
                  <View style={styles.main}>            
                    <FlatList
                        data={data.users}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <Text>{item.name}</Text> }
                    />
              </View>  
                )  
              }  
            } 
          </Query>
        );
      }
    }

  const styles = StyleSheet.create({
    center: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }})

const FETCH_USERS = gql`
query {
    users {
        id
        name
      }
    }
`;

