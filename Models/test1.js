
import React from 'react'
import { View,  Button, Text} from 'react-native'


// 1.1) Le texte est cache par la barre du haut, resolvez cela.
// 1.2) Comment peut on forcer l'affichage de NEW TEXT ?

export default class Test1 extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            text:props.toto
        }
    }
    changeText(newText)
    {
        this.setState({text: newText})
    }
    render() {
        return(
            <View>
                <Text>{this.state.text}
                </Text>
                <Button
                    title= "press to change"
                    onPress = {() => this.changeText("HEY")}
                />
            </View>
        )
    }
}
