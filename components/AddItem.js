import React, { useRef} from "react";
import {View,StyleSheet,Text,TextInput,Alert} from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import {unsetflag} from "../redux/ducks/flag";
import {increment} from "../redux/ducks/counter";
import {set_data} from "../redux/ducks/data"
function AddItem() {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.data.data);
    const flag=useSelector((state)=>state.flag.flag);
    const count=useSelector((state)=>state.counter.count);
    const handleEmptyStringAlert = () =>
        Alert.alert(
            "Empty Task",
            "This task is empty.\nWould you like to add content to it?",
            [
                { text: "YES"},
                { text: "NO", onPress: () =>dispatch(unsetflag())}
            ]
        );
    const handleAddItem=(nextTitle)=>{
        if(nextTitle!=""){
            console.log(count);
            dispatch(set_data([...data,{id:count,title:nextTitle,status:false}]));
            dispatch(unsetflag());
            dispatch(increment());
        }
        else{
            handleEmptyStringAlert()
        }
    }
    return (
        <View>
            <Modal isVisible={flag} style={{backgroundColor:"white",borderColor:"black",borderWidth:3}} onBackButtonPress={()=>dispatch(unsetflag())}>
                <View style={style.container}>
                    <Text style={{fontSize:40,fontWeight:"bold",alignSelf:"center",height:50,color:"black"}}>Add Task</Text>
                    <TextInput onSubmitEditing={({ nativeEvent }) =>handleAddItem(nativeEvent.text)}style={{borderWidth:1,marginTop:10,marginLeft:5,marginRight:5,flex:1}} placeholder="Enter The Content"/>
                </View>
            </Modal>
        </View>
    );
}
const style=StyleSheet.create({
    container:{
        flex:1
    },
    
})
export default AddItem;