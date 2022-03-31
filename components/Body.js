import React,{} from "react";
import {View,StyleSheet,TouchableOpacity,Image,FlatList,Text,Alert} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { setflag } from "../redux/ducks/flag";
import { set_data } from "../redux/ducks/data";


const Body = () => {
    const data=useSelector((state)=>state.data.data);
    const dispatch=useDispatch();
    const handleDelteCompleted=()=>{
        Alert.alert(
            "Delete Completed",
            "Are you sure you want to delete all the completed tasks?",
            [
              { text: "YES",onPress: () =>dispatch(set_data(data.filter(data=>data.status!=true)))},
              { text: "NO"}
            ]
          );
    }
    return (
        <View style={style.container}>
            <View style={style.container}> 
                <FlatList data={data} renderItem={({item})=>{
                    return(
                        <Item item={item}/>
                    );
                }} />
            </View>
            <View style={style.container2}>
                <TouchableOpacity style={style.icon} >
                    <Icon name="trash-restore" size={40} color="black" style={{alignSelf:"center"}} onPress={handleDelteCompleted}/>
                </TouchableOpacity>
                <View style={{flex:1}}></View>
                <TouchableOpacity style={style.icon} onPress={()=>{
                    console.log("pressed");
                    dispatch(setflag())
                    }}>
                    <Icon name="plus" size={40} color="black" style={{alignSelf:"center"}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const style=StyleSheet.create({
    icon:{
        width: 50,  
        height: 50,   
        borderRadius: 30,            
        backgroundColor: 'skyblue',                                    
        alignContent:"center",
        justifyContent:"center",
    },
    container:{
        flex:1
    },
    container2:{
        opacity:1,
        marginTop:5,
        margin:10,
        flexDirection:"row",
        alignContent:"stretch"
        },
})
export default Body;