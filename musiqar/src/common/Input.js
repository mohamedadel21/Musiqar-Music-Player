
import React ,{Component} from 'react';
import {AppRegistry,Text,Dimensions,View,StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome } from '@expo/vector-icons';

import { Input } from 'react-native-elements';
import Colors from '../Constant/Colors';

const {height,width} =Dimensions.get('window');

const Input4 = (props) =>{
   
    return(

        <View  >

        <Input

            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            autoCorrect={false}
            autoCapitalize='none'
            textContentType={props.textContentType}
            secureTextEntry={props.secureTextEntry}

            inputContainerStyle={
              {
                marginTop:props.marginTop
                ,borderColor:props.borderColor,
                borderBottomWidth:props.borderBottomWidth,
                borderWidth:props.borderWidth,
                width:width- props.width,
                alignSelf:props.alignSelf,
                backgroundColor:Colors.opacity,
                height:props.height
              }
            }
           
            inputStyle={{ marginLeft:props.marginLeft, color:props.color,fontSize:props.fontSize}}
            onChangeText={props.onChangeText}
            leftIcon={

                <FontAwesome 
                        name={props.iconName}
                        size={14}
                        color={props.iconColor}
                    />
            }
            
            >

        </Input>

        </View>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:Colors.white,
       height:32
       ,width:200,
       alignItems:'center',
       justifyContent:'center',
       shadowColor:'#c2c2c2',
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:2,
       borderRadius:50, 
       marginTop:15
    },
    textStyle:{
        color:Colors.black,
        fontSize:13,
        fontWeight:'normal',
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
    }
});
export default Input4;