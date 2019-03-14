import React, { Component } from 'react';
import { Text, Image,StyleSheet,ImageBackground,Dimensions,TouchableOpacity, View ,ScrollView} from 'react-native';
import Colors from '../Constant/Colors'
import {Button} from 'react-native-elements';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation'
import {LinearGradient} from 'expo';
const {height,width} =Dimensions.get('window');




const Header = (props) =>{
    return(

            <View style={
             {     
          height:height/2-200,
          borderBottomEndRadius:20,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20
          }
          }>


           <ImageBackground source={require('../../assets/nav.jpg')} style={{flex:1}}>

           <LinearGradient  colors={['#e15f9a77','#a639cb77','#8172f777']}  style={{flex:1,justifyContent:'center',alignItems:'center'}}>

           <Image style={{width:140,height:40,alignContent:'center',alignSelf:'center'}} source={require("../../assets/logo.png")}></Image>

            <Text style={{ marginLeft:30,marginRight:30,textAlign:'center',alignSelf:'center', color:Colors.white,fontSize:13}}>share your music, connect with artists, explore new content</Text>
          
                    
              
            </LinearGradient>            
           
            </ImageBackground>
            </View>

               
                     

    );
};


const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#fff',
       height:60,
       alignItems:'center',
       justifyContent:'center',
       shadowColor:'#c2c2c2',
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:1

    },
    textStyle:{
        
        fontSize:15,
        fontWeight:'bold',
        color:'#c0c0c0',

        

    }
});
export default Header;