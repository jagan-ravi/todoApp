import React, { useState } from "react";
import {View,StyleSheet,TouchableOpacity,Image,Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {set_data} from "../redux/ducks/data";
import { useDispatch, useSelector } from "react-redux";
const Item = ({item}) => {
    const data=useSelector((state)=>state.data.data);
    const dispatch=useDispatch();
    const handleDelteItem=(id)=>{
        dispatch(set_data(data.filter(data=>data.id!=id)));
    }
    const handleStatusChange=(id)=>{
        data.find(item =>item.id === id).status=true;
        dispatch(set_data([...data]));
    }
    return (
        <View style={style.itemContainer}>
            <TouchableOpacity style={style.itemIconContainerLeft} onPress={()=>handleDelteItem(item.id)}>
                <Icon name="trash" size={40} color="black" style={{margin:4}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}}>
                <Text style={{...style.item,
                    textDecorationLine:item.status?"line-through":"none",
                }} >
                    {item.title}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.itemIconContainerRight} onPress={()=>handleStatusChange(item.id)}>
                <Icon name="check" size={40} color="black" style={{margin:4}}/>
            </TouchableOpacity>
        </View>
    );
}
const style=StyleSheet.create({
    itemContainer:{
        flex:1,
        flexDirection:"row",
        borderWidth:2,
        margin:"3%",
        borderRadius:10,            

    },
    itemContainer:{
        flex:1,
        flexDirection:"row",
        borderWidth:2,
        margin:"3%",
        borderRadius:10,            

    },
    itemIconContainerLeft:{
        backgroundColor:"skyblue",
        justifyContent:"center",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    itemIconContainerRight:{
        backgroundColor:"skyblue",
        justifyContent:"center",
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },
    item:{
        fontSize:30,
        textAlignVertical:"center",
        flex:1,
        textAlign:"center",
        backgroundColor:"white",
        textDecorationStyle:"solid",
    },
})
export default Item;