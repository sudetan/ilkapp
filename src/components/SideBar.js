import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
  
export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }  
  render() {
    return (
       <View>
           <View style = {styles.container}>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.main()}><Text style = {styles.title}> Ana Sayfa </Text></TouchableOpacity> 
                </View>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.page2()}><Text style = {styles.title}> Kaydedilenler </Text></TouchableOpacity> 
                </View>
                
                <View style = {styles.textView}>
                    <TouchableOpacity onPress={() => Actions.drawerClose()}><Text style = {styles.title}> Geri </Text></TouchableOpacity> 
                </View>
            </View>
       </View>       
      );
  }
}

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex:1,
        top:72
     },
     textView:{
        height: 50,
        width:'100%',
        alignItems: 'center',
     },
     title:{
      fontSize:20,
      color:'#2C143D'
     },     
});