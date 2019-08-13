import React from 'react';
import{Modal,View,Button,Image,Text,StyleSheet} from 'react-native';

const PlaceDetail = props =>
{
    let  modalContent=null;
if(props.SelectedPlace)
{
    modalContent=(
    <View>
        <Image source={props.SelectedPlace.image} style={Styles.placeImage}/>
        <Text style={Styles.placeName}>{props.SelectedPlace.name} </Text>
    </View>

    )
}
    return(
        <Modal onRequestClose={props.onModalClosed} visible={props.SelectedPlace!==null} animationType="slide">
        <View style={Styles.modalContainer}>
            {modalContent}
            <View>
                <Button title="Delete" color={'red'} onPress={props.onItemDeleted}/>
                <Button title="Close" onPress={props.onModalClosed}/>
            </View>

        </View>
    </Modal>

    );

};

const Styles=StyleSheet.create(
    {
        modalContainer:
            {
                margin: 22

            },
            placeImage:
                {
                    width:"100%",
                    height:"50%",
                },
        placeName:{
            fontWeight: "bold",
            textAlign: "center",
           fontSize: 28
        }

    }
);
export default PlaceDetail;

