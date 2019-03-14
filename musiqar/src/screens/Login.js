import React, { Component } from 'react';
import { Text, StyleSheet,ScrollView,Image,Alert,Dimensions,View,ImageBackground,TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import {  } from 'react-native-elements';
import Colors from '../Constant/Colors';
import { connect } from 'react-redux';
import Button from '../common/Button';
import Input from '../common/Input';
const {height,width} =Dimensions.get('window');

import { login,facebookLogin} from '../actions'

 class Login extends Component {

  constructor(props){

    super(props);

    this.state={
      email:null
      ,password:null
    }

  }

  
  componentWillReceiveProps(next){
    if(next.token ){
        this.props.navigation.navigate('Home');
    }
    if(next.FBtoken){
      this.props.navigation.navigate('Home');
  }
  if(next.error==true){
    Alert.alert('Email or password is invalid')
}
  }

    render() {
        return (

        <View style={styles.mainView}>
        <ImageBackground source={require('../../assets/back.jpg')} style={styles.imageBack}>

         <LinearGradient colors={['#e15f9a77','#a639cb77','#8172f777']} style={styles.linearGradient}>

            <View style={styles.headerView}>
            <ScrollView

            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
            >

            
            <Image style={{width:200,height:60,alignContent:'center',alignSelf:'center'}} source={require("../../assets/logo.png")}></Image>
          
            <Input
            placeholder='Email'
            placeholderTextColor={Colors.lightGrey}
            autoCorrect={false}
            autoCapitalize='sentences'
            textContentType='emailAddress'
            width={110}
            alignSelf='flex-start'
            color={Colors.green}
            marginTop={30}
            height={50}
            marginLeft={10}
            secureTextEntry={false}
            color={Colors.white}
            iconName='envelope'
            iconColor={Colors.lightGrey}
            onChangeText={(email)=>{
              this.setState({email})
            }}


            />

            <Input
            placeholder='Password'
            placeholderTextColor={Colors.lightGrey}
            autoCorrect={false}
            autoCapitalize='sentences'
            textContentType='password'
            width={110}
            alignSelf='flex-start'
            color={Colors.darkGrey}
            secureTextEntry={true}
            marginTop={10}
            color={Colors.white}
            iconColor={Colors.lightGrey}
            iconName='unlock'
            height={50}
            marginLeft={10}
            backgroundColor={Colors.opacity}

            onChangeText={(password)=>{
              this.setState({password})

            }}
            />

          <Button 
            textTitle='LOGIN'
            backgroundColor={Colors.white}
            color={Colors.darkGrey}
            borderRadius={53}
            marginTop={30}
            width={width-110}
            height={43}
            elevation={5}
            
           onPress={()=>{
            const {email,password} =this.state;
             if(email==null){
              Alert.alert('Enter your email')
             }else if(password==null){
              Alert.alert('Enter your password')
             }else{
              this.props.login(email,password);

             }

           }}
           />

          <Button 
            textTitle='LOGIN WITH FACEBOOK'
            backgroundColor={Colors.facebook}
            color={Colors.white}
            borderRadius={53}
            marginTop={10}
            width={width-110}
            height={43}
            elevation={5}
            
           onPress={()=>{
             
            this.props.facebookLogin();

           }}
           />
            

          </ScrollView>
          
            </View>

         </LinearGradient>            
           </ImageBackground>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView:{
      height:height,
      width:width
    },
    imageBack:{
        flex:1
    }
    ,
    linearGradient: {
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      headerView:{
        justifyContent:'center',
        alignItems:'center'
      },
      headerText:{
          color:Colors.white,
          fontSize:44,
          alignSelf:'center'

      },decsText:{
        color:Colors.white,
        fontSize:14,
        marginRight:50         
        ,marginLeft:50,
        marginTop:10,
        alignSelf:'center'

      },
      login:{
        
      }
});

const mapStateToProps=({login,facebook})=>{

  return{
  loading :login.loading,
  token:login.token,
  error:login.error,
  FBtoken:facebook.token
};
};


export default  connect(mapStateToProps,{login,facebookLogin})(Login) 