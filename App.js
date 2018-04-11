import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {
  ActivityIndicator,
} from 'react-native';
import { Button } from 'react-native';
import PlaceList from './src/components/PlacesList/placeList.js';
import ListRenderer from './src/components/ListRenderComp/listRender.js';
import ListGenerater from './src/components/ListGeneraterComp/listGeneraterFunc.js'
import PlaceDetail from './src/components/PlaceDetail/placeDetail';
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      places:[],
      selectedPlace:null
    }
   
  }
  showItem=(placeKey)=>
  {
    let selectedPlace = this.state.places.find((place)=>
    {
      if(place.key=placeKey)
      return true
    })
    this.setState({selectedPlace:selectedPlace});
 
  }
getFilledData=(place)=>
{

  this.setState(prevState=>
    {
   return {places:prevState.places.concat({
     key:Math.random(),
    name:place,
    placeImage:{
      uri:'https://www.jaipur.org.uk/images/amer-palace-jaipur.jpg'
    }
  })}
    })
}
deletePlaceHandler=()=>
{
console.log(this.state)
 this.setState(prevState=>
{
  return {
    places:prevState.places.filter((place)=>
    {
      console.log(prevState.selectedPlace.key)
return place.key != prevState.selectedPlace.key;
    }),
    selectedPlace:null
  }
})

 
}
closeModalHandler=()=>
{
  this.setState({selectedPlace:null})
}
  render() {
    return (
      <View style={styles.container} >
      <PlaceDetail 
      selectedPlace = {this.state.selectedPlace}
      closeModal={this.closeModalHandler}
      deletePlace={this.deletePlaceHandler}
      />
      <View>
     <ListGenerater getFilledData={this.getFilledData}/>
</View>
<PlaceList
places={this.state.places}
showItem={this.showItem}
/>
</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:26,
    backgroundColor: '#fff',
    alignItems: 'flex-start'
  },
  outputContainer:{
    width:'100%',
    marginTop:10
  },
  inputStyle:{
    width:"70%"}

});
