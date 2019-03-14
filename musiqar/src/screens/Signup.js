import React, { Component } from 'react';
import { Text, StyleSheet,ScrollView,Alert,Image,Dimensions,View,ImageBackground,TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import {  } from 'react-native-elements';
import Colors from '../Constant/Colors';
import { connect } from 'react-redux';
import Button from '../common/Button';
import Input from '../common/Input';
const {height,width} =Dimensions.get('window');
import { signup} from '../actions'

class Signup extends Component {

  constructor(props){

    super(props);

    this.state={
      email:null
      ,password:null
      ,lastName:null
      ,firstName:null
      ,username:null
    }

  }


  componentWillReceiveProps(next){
    if(next.token){
        this.props.navigation.navigate('Home');
    }

    if(next.error==true){
      Alert.alert('Please enter valid email')
  }
  }

    render() {
        return (

        <View style={styles.mainView}>

        <ImageBackground source={require('../../assets/back.jpg')} style={styles.imageBack}>

        <LinearGradient colors={['#e15f9a77','#a639cb77','#8172f777']} style={styles.linearGradient}>

            <View style={styles.headerView}>

            <ScrollView

            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>

            
            <Image style={{width:200,height:60,alignContent:'center',alignSelf:'center'}} source={require("../../assets/logo.png")}></Image>
          
            <Input
            placeholder='First name'
            placeholderTextColor={Colors.lightGrey}
            autoCorrect={false}y
            autoCapitalize='sentences'
            textContentType='name'
            width={110}
            alignSelf='flex-start'
            color={Colors.green}
            marginTop={30}
            height={50}
            marginLeft={10}
            secureTextEntry={false}
            color={Colors.white}
            iconName='user'
            iconColor={Colors.lightGrey}
            onChangeText={(firstName)=>{
              this.setState({firstName})
            }}


            />
          <Input
            placeholder='Last name'
            placeholderTextColor={Colors.lightGrey}
            autoCorrect={false}y
            autoCapitalize='sentences'
            textContentType='name'
            width={110}
            alignSelf='flex-start'
            color={Colors.green}
            marginTop={10}
            height={50}
            marginLeft={10}
            secureTextEntry={false}
            color={Colors.white}
            iconName='user'
            iconColor={Colors.lightGrey}
            onChangeText={(lastName)=>{
              this.setState({lastName})

            }}
            />

            <Input
            placeholder='Username'
            placeholderTextColor={Colors.lightGrey}
            autoCorrect={false}y
            autoCapitalize='sentences'
            textContentType='emailAddress'
            width={110}
            alignSelf='flex-start'
            color={Colors.green}
            marginTop={10}
            height={50}
            marginLeft={10}
            secureTextEntry={false}
            color={Colors.white}
            iconName='envelope'
            iconColor={Colors.lightGrey}
            onChangeText={(username)=>{
              this.setState({username})

            }}
            />


            <Input
            placeholder='Email'
            placeholderTextColor={Colors.lightGrey}
            autoCorrect={false}y
            autoCapitalize='sentences'
            textContentType='emailAddress'
            width={110}
            alignSelf='flex-start'
            color={Colors.green}
            marginTop={10}
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
            textTitle='REGISTER'
            backgroundColor={Colors.white}
            color={Colors.darkGrey}
            borderRadius={53}
            marginTop={30}
            width={width-110}
            height={40}
            elevation={3}
            
           onPress={()=>{

             const {firstName,lastName,username,email,password} =this.state;

             if(firstName==null){
              Alert.alert('Enter your first name')
             }else if(lastName==null){
              Alert.alert('Enter your last name')
             }
             else if(username==null){
              Alert.alert('Enter your username')
             }else if(email==null){
              Alert.alert('Enter your email')
             }else if(password==null){
              Alert.alert('Enter your password')
             }
            else{
              this.props.signup(firstName,lastName,username,email,password);

             }

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
        color: Colors.white,
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

const mapStateToProps=({signup})=>{

  return{
  loading :signup.loading,
  token:signup.token,
  error:signup.error,
};
};


export default  connect(mapStateToProps,{signup})(Signup) 