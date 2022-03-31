//single component
import React, {useEffect, useState} from "react";
import {View,StyleSheet,SafeAreaView,Text,TextInput,Alert} from "react-native";
import Body from "./components/Body";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
const App =()=>{
    return(
        <SafeAreaView style={style.container}>
            <Header/>
            <Body/>
            <View>
            <AddItem />
            </View>
        </SafeAreaView>
    );
}
const style=StyleSheet.create({
    container:{
        flex:1
    },
});
export default App;
