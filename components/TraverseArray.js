import React from 'react';
import {StyleSheet,FlatList} from 'react-native';
import ListView from './ListView'
const ExtractArrayElements = props =>
{

    return( <FlatList
        style={styles.last}
        data={props.Array}
        renderItem={(info)=> (
                <ListView
                PlaceName={info.item.name}
                PlaceImage={info.item.image}
                id={()=> props.onItemSelected(info.item.key)}/>
  )       }    //round Brakets used for return

    />);

};
export default ExtractArrayElements;


const styles = StyleSheet.create({

    last:
        {
            width: '100%',
        },


});

