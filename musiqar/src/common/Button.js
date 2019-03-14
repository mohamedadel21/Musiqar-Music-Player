
import React ,{Component} from 'react';
import {AppRegistry,Text,View,Dimensions,TouchableOpacity,StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';
import {Button} from 'react-native-elements';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
const {height,width} =Dimensions.get('window');


const Buttonn = (props) =>{
    return(
    <TouchableOpacity 
    
    onPress={props.onPress}

        style={{   

            borderWidth:props.borderWidth,
            borderColor:props.borderColor,
            justifyContent:'center',
            alignItems:'center'
            ,height:props.height
            ,width: props.width,
            marginLeft:props.marginLeft,
            marginRight:props.marginRight,
            backgroundColor:props.backgroundColor,
            borderRadius:props.borderRadius, 
            marginTop:props.marginTop,
            elevation:props.elevation,
            flexDirection:'row'
        
          }}

            >
                    <EvilIcons
                        name={props.iconName}
                        size={18}
                        color={props.iconColor}
                    />
       <Text style={{color:props.color}}>{props.textTitle} </Text>

                    <EvilIcons
                        name={props.iconNameLeft}
                        size={18}
                        color={props.iconColorLeft}
                    />
    </TouchableOpacity>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       shadowColor:'#c2c2c2',
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
      
    },
    textStyle:{
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    }

    
});
export default Buttonn;