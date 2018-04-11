import React from 'react';
import {Image,Text,View,Button,Modal,StyleSheet} from 'react-native';

const PlaceDetail = (props) =>
{
 let selectedPlace = null
 if(props.selectedPlace)
 {
    selectedPlace=(<View> 
    <Image style={style.imageStyle} source={props.selectedPlace.placeImage}/>
 <Text>{props.selectedPlace.name}</Text>
 </View>)
 }
 else
 {
     selectedPlace = null
 }
return(
    <Modal visible={props.selectedPlace?true:false} onRequestClose={props.closeModal}>
        <View>
        
           {selectedPlace?selectedPlace:null}
            <View>
            <Button 
            title="Delete"
            onPress={props.deletePlace}
            > 
            </Button>
            <Button 
            title="Close"
            onPress={props.closeModal}
            > </Button>
            </View>
        </View>
    </Modal>
)
}
const style = StyleSheet.create({
    imageStyle:{
        width:'100%',
        height:100
    }
})
export default PlaceDetail;