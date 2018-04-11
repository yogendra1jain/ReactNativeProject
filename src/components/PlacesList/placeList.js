import React,{Component} from 'react';
import ListItem from  '../../components/ListRenderComp/listRender';
import {StyleSheet,FlatList} from 'react-native';


const placeList=(props)=>
{
return (
<FlatList 
style={styles.outputContainer}
data={props.places}
renderItem={(info)=>
(
<ListItem
  showItem={props.showItem}
  listIndex={info.item.key}
  listItem={info.item.name}
  placeImage={info.item.placeImage}
  />
)}
>
</FlatList>)
}
const styles = StyleSheet.create({
    outputContainer:{
      width:'100%',
      marginTop:10
    }
  
  });
export default placeList;
