import React from 'react';
import { StyleSheet, View,TouchableOpacity,Text,Image} from 'react-native'

const ListView = (props) => {
    return(

        <TouchableOpacity onPress={props.id}>
            <View  style={styles.listStyle} >
                <Image resizeMode={"cover"} source={props.PlaceImage} style={styles.PlaceImage}/>
                <Text>{props.PlaceName}</Text></View>
        </TouchableOpacity>


    );

};
export  default ListView;
const styles= StyleSheet.create({
    listStyle :
        {
            width: '100%',
            padding: 10,
            marginTop:5,
            backgroundColor:'#FA8072',
            flexDirection:'row',
            alignItems:'center',

        },
    PlaceImage:
        {
            marginRight:8,
            height:30,
            width:30
        }

});

