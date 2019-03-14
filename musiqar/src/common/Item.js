import React, { Component } from 'react';
import { Text,Image, Dimensions,StyleSheet, View,TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors'
import {Button} from 'react-native-elements';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome } from '@expo/vector-icons';
const {width,height} =Dimensions.get('window')
const Item =(props)=> {
   
        return (
            <View style={[styles.container,{ backgroundColor:Colors.white, }]}>

                <TouchableOpacity style={styles.touch}
                onPress={props.onPress}
                >


                <Image style={{borderRadius:50,height:100,width:100}} source={{uri:props.image}}/>

                <Text  style={styles.text}>{props.text}</Text>
                <Text  style={styles.view}>{props.views}</Text>
                
                </TouchableOpacity>
                </View>
        );
    }


const styles = StyleSheet.create({
    container:{
        height:190,
        width:width/2-18,
        borderRadius:0,
        shadowColor:Colors.grey,
        shadowOpacity:.1,
        shadowOffset:{width:0,height:2},
        elevation:2,
        borderRadius:10
       
        
     },
    touch:{
        height:190,
        width:width/2-7,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        
        
    },
    text:{
        color:Colors.darkGrey,
        marginTop:5,
        textAlign:'center',
        fontSize:13,
        alignSelf:'center'

    },
    view:{
        color:Colors.grey,
        marginTop:4,
        textAlign:'center',
        fontSize:11,
        alignSelf:'center'

    },

});

export default Item;