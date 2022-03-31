import React from "react";
import {View,StyleSheet,Text} from "react-native";
const Header = () => {
    return (
        <View style={style.container}>
        <Text style={style.header}>To Do List</Text>
        </View>
    );
}
const style=StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize:40,
        backgroundColor:"skyblue",
        fontWeight:"bold",
        color:"white",
    },
    container:{
        backgroundColor:"skyblue",
        height:60
    }
})
export default Header;