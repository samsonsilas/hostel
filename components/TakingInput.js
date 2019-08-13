import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native'

const TakingInput = props =>
{
return(
    <View  style={styles.input}>
    <TextInput style={styles.textInput}  onChangeText={props.click}/>
    <Button  title="Button" style={styles.placeButton} onPress={props.onclick} />
    </View>
);

};
export default TakingInput;
const styles = StyleSheet.create({

    textInput:
        {
            width: '70%',
            borderColor:"black" , borderWidth: 1
        },
    placeButton:
        {
            width:'30%'
        },
    input: {
        //flex: 1,
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },

});