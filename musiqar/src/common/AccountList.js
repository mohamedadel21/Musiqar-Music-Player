import React, { Component } from 'react';
import { Dimensions,Text, StyleSheet, View,TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors'
import {Button} from 'react-native-elements';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome } from '@expo/vector-icons';
import {LinearGradient} from 'expo';

const {width,height}=Dimensions.get('window')

const Item =(props)=> {
   
        return (
            <View style={[styles.container,{ backgroundColor:Colors.lightGrey,flexDirection:'row' }]}>
                <TouchableOpacity style={styles.touch}
                onPress={props.onPress}>

                          <LinearGradient  

                            colors={['#ea9ede','#b38fd9',"#7185de"]} 
                            style={{width:60,height:60,
                            borderRadius:50,marginLeft:20,
                            justifyContent:'center',
                            alignItems:'center'}}

                            >
                            
                          <FontAwesome 
                           name={props.iconName}
                           size={22}
                           color={props.color}
                           />
                           </LinearGradient>

                           <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:20}} >

                           <Text  style={styles.text} >{props.text} </Text>
                           <Text  style={styles.text2} >{props.text2} </Text>
                            
                           </View>

                         <View style={{ marginLeft:100}}>

                         <EvilIcons 
                           name='chevron-right'
                           size={37}
                           color={Colors.grey}
                           />
                         </View>

                </TouchableOpacity>
            </View>
        );
    }


const styles = StyleSheet.create({

    container:{
       height:75,
       borderRadius:3,
       shadowColor:Colors.lightGrey,
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:1,
       margin:5,
       borderRadius:40

    },
    touch:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        
    },
    text:{
        color:Colors.darkGrey,
        fontSize:16,
        marginTop:0,
    },
    text2:{
        color:Colors.grey,
        fontSize:13,
        marginTop:0,
    }

});

export default Item;