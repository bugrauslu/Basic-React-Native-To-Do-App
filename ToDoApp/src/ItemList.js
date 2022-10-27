import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const itemList = ({text})=> {
    return (
      <View style={styles.card}>
        <Text style={{color:"#472D2D", fontSize:16 ,fontWeight:"bold"}}>{text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    card:{
        padding:10,
        margin:5,
        backgroundColor:'#E8DFCA',
        borderRadius:20,
        alignItems:"center",
     
    }
})


  export default itemList
