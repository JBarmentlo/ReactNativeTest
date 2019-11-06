import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'





export default class Test extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            titi: props.toto
        }
    }
    render() {
        return(
            <View style= {margintop = 20}>
                <Text>{this.state.titi}
                </Text>
                <Button title= "press to change" onPress = {() => this.setState({titi: "new Texto"})}></Button>
            </View>
        )
    }
}
