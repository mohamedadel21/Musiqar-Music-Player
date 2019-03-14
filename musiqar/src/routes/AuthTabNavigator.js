
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons,Ionicons,EvilIcons } from '@expo/vector-icons';

import Colors from '../Constant/Colors';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import React from 'react';
import { createStackNavigator,createAppContainer,createMaterialTopTabNavigator } from 'react-navigation';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default Tab = createMaterialTopTabNavigator({
	Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
           
            tabBarIcon: ({ tintColor }) => {
                return (
                    <FontAwesome 
                        name='sign-in'
                        size={18}
                        color={tintColor}
                    />

                );
            }
        })
    }
,
    Signup: {
        screen: Signup,
        navigationOptions: ({navigation}) => ({
           
            tabBarIcon: ({ tintColor }) => {
                return (
                    <FontAwesome 
                        name='user-plus'
                        size={18}
                        color={tintColor}
                    />

                );
            }
        })
    }


}
, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: false,
        showLabel:true,
         labelStyle:{
                fontSize:12,
                backgroundColor:Colors.none
         },
        inactiveTintColor: Colors.darkGrey,
        activeTintColor: Colors.yellow,
        pressColor: Colors.red,
        
        indicatorStyle: { backgroundColor: Colors.yellow },
        style: {
            backgroundColor: Colors.white,
            
        },
        inactiveBackgroundColor:Colors.white,
        tabStyle:{
            backgroundColor:Colors.none,
            borderRadius:20,
            
        }
        
    }
});


