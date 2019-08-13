import React , { Component } from 'react';
import {StyleSheet,View,} from 'react-native';
import TakingInput from './components/TakingInput';
import TraverseArray from './components/TraverseArray';
import PlaceDetail from './components/PlaceDetail'


export default class App extends Component {
  state={
    placeName:"",
    Array:[],
  SelectedPlace:null
  };
  placeNameChangedHandler = (event) =>{

    this.setState({placeName:event}  );
  };

    placeSubmitHandler = ()=>{

        this.setState({Array:this.state.Array.concat({
                key:Math.random(),
                name:this.state.placeName,
                image: {uri:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"}
        })}   );
    };

    placeSelectedHandler = key =>
    {
        this.setState({SelectedPlace: this.state.Array.find(place=>{
            return(place.key===key);
        })})

    };
    placeDeletedHandler =()=>
    {
this.setState({Array:this.state.Array.filter(place=>{
            return place.key!==this.state.SelectedPlace.key;
            }), SelectedPlace:null})
    };
    modalClosedHandler =()=>
    {
        this.setState({SelectedPlace:null});

    };

  render (){

      return (
  <View style={styles.container}>
<PlaceDetail SelectedPlace={this.state.SelectedPlace} onItemDeleted={this.placeDeletedHandler}
             onModalClosed={this.modalClosedHandler}/>
<TakingInput click={this.placeNameChangedHandler} onclick={this.placeSubmitHandler}/>
<TraverseArray Array={this.state.Array} onItemSelected={this.placeSelectedHandler}/>


</View>


    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
      padding:26
  },
    last:
        {
            width: '100%',
        },


});
