import React,{Component} from 'react';
import {TextInput,Button,List,View,StyleSheet} from 'react-native';
export default class ListGenerater extends Component
{
 constructor(props)
 {
     super(props);
     this.state={
        text:''
      };
 }
 addTitleHandler=()=>
 {
this.props.getFilledData(this.state.text);
 }  
render()
    {
 return(  
<View style={styles.inputContainer}>     
<TextInput
     onChangeText={(text)=>this.setState({text})}
     value={this.state.text}
     placeHolder="User Name"
     style={styles.inputStyle}
/>
<Button 
title="Add"
onPress={this.addTitleHandler}
/>
</View>)
    }
}

const styles = StyleSheet.create({
    inputStyle:{
      width:"70%"},
  inputContainer:
  {
    justifyContent:'center',
    flexDirection:'row',
    width:"100%",

  }
  
  });