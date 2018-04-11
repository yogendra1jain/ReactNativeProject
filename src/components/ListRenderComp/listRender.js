import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableNativeFeedback,ScrollView,Image} from 'react-native';

export default class ListView extends Component
{
    tochHandler=()=>
    {
    this.props.showItem(this.props.listIndex);
    }
    render()
    {
        return(
            <TouchableNativeFeedback onPress={this.tochHandler}>
            <View style={styles.listItemStyle}>
            <Image source={this.props.placeImage} style={styles.placeImage}></Image>
                <Text>{this.props.listItem} </Text>
            </View>
            </TouchableNativeFeedback>
        )
    }
   
}
const styles = StyleSheet.create({
    listItemStyle:{
        width:'100%',
        marginBottom:5,
        padding:10,
        backgroundColor:'#eee',
        flexDirection:'row',
        alignItems:'center'

      },
      placeImage:{
          marginRight:30,
          height:30,
          width:30
      }
})
