import React, { Component } from 'react';
import { Text,BackHandler , Dimensions,StyleSheet,Linking,TouchableOpacity,Slider,Image, View ,ScrollView} from 'react-native';
import Colors from '../Constant/Colors'
import {Button} from 'react-native-elements';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome } from '@expo/vector-icons';
import Header from '../common/Header';
import { connect } from 'react-redux';
import {trackUrl, imageUrl,} from '../Constant/Urls';
import {Audio} from 'expo';
const {height,width} =Dimensions.get('window');
import {getOneTacks} from '../actions'
class Home extends Component {

    async componentWillMount(){

        const item =this.props.navigation.getParam('item')
        
        this.setState({item})  
        this.setState({sound:item.name});
        this.setState({id:item.id});

            //console.log(trackUrl+item.name+"   sss");
          
    }



    playTrack =async(file)=>{
        try {

            await this.soundObject.loadAsync({uri :trackUrl+file});
            await this.soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }

    }

    constructor(props){

        super(props);
    
        this.state={
          item:{},
          id:null,
          isPlaying:true,
          isPausing:false,
          playIcon:'pause',
          sound:''
        }

         this.soundObject = new Audio.Sound();


         BackHandler.addEventListener('hardwareBackPress', ()=>{

            this.soundObject.stopAsync();
         

         });


    
      }


   

     componentWillReceiveProps(next){
     
        this.setState({item:next.track})
        console.log(next.track)
     }

    render() {
       
        this.playTrack (this.state.sound);
    

        return (
            <View style={{flex:1,flexDirection:'column',}}>

            <Header navOption='false' navColor={Colors.none}  navigation={this.props.navigation} backgroundColor={Colors.white} color={Colors.none}/>
            
            <View  style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
            
            <View style={{width:150,height:150,borderRadius:100,alignContent:'center',alignSelf:'center', shadowColor:Colors.grey,
                        shadowOpacity:.1,
                        shadowOffset:{width:0,height:2},
                        elevation:10,}
                        }>
            <Image style={{width:150,height:150,borderRadius:100,alignContent:'center',alignSelf:'center'}} source={{uri:imageUrl+this.state.item.uploader.image}}/>
            
            </View>

            <Text style={{marginTop:20,color:Colors.darkGrey,fontSize:18,textAlign:'center',}}>{String(this.state.item.title).substring(3,String(this.state.item.title).length)}</Text>


            <View style={{flexDirection:'row',marginTop:20}}>


                <TouchableOpacity style={{height:30,width:30,backgroundColor:Colors.none,borderRadius:50,justifyContent:'center',alignItems:'center'}}

                 onPress={()=>{

                this.soundObject.replayAsync();
                
                 }
                 }>

             
                          <EvilIcons 
                            name='redo'
                            size={30}
                            color={Colors.grey}
                            />

                 </TouchableOpacity>
             
             
                 <TouchableOpacity style={{marginLeft:15,height:30,width:30,backgroundColor:Colors.none,borderRadius:50,justifyContent:'center',alignItems:'center'}}

                 onPress={()=>{
                
                Linking.openURL(trackUrl+this.state.item.name);

                 }
                 }>

             
                          <EvilIcons 
                            name='arrow-down'
                            size={27.5}
                            color={Colors.grey}
                            />

                 </TouchableOpacity>
             
             
                </View>


            <Slider
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={Colors.yellow}
          maximumTractTintColor={Colors.grey2}
          step={.001}
          value={1}
          onValueChange={value => {
               
            console.log(value);
            this.soundObject.setVolumeAsync(value)

            //this.soundObject.setPositionAsync(value*1000)
          

          }}
          style={{width:width-100,marginTop:20}}
          thumbTintColor={Colors.yellow}
          
               />

                

               <View style={{flexDirection:'row',marginTop:12}}>


               <TouchableOpacity style={{marginRight:15,height:70,width:70,backgroundColor:Colors.none,borderRadius:50,justifyContent:'center',alignItems:'center'}}
                
                onPress={()=>{
                 
                    if(!this.state.id < 5721){
                        this.props.getOneTacks(this.props.token,--(this.state.id));
                    }
                }
                }>

                        
                         <FontAwesome 
                           name='backward'
                           size={25}
                           color={Colors.darkGrey}
                           />

                </TouchableOpacity>

               <TouchableOpacity style={{height:70,width:70,backgroundColor:Colors.yellow,borderRadius:50,justifyContent:'center',alignItems:'center'}}
                onPress={()=>{

                        if(this.state.isPlaying==true){
                            this.setState({playIcon:'play'})
                            this.soundObject.pauseAsync();
                            this.setState({isPausing:true,isPlaying:false});
                        }


                        else if(this.state.isPausing==true){
                            this.setState({playIcon:'pause'})
                            this.soundObject.playAsync();
                            this.setState({isPlaying:true,isPausing:false});
                        }

                       
                        

                       
                }}>

                        
                         <FontAwesome 
                           name={this.state.playIcon}
                           size={20}
                           color={Colors.white}
                           />

                </TouchableOpacity>


                <TouchableOpacity style={{marginLeft:15,height:70,width:70,backgroundColor:Colors.none,borderRadius:50,justifyContent:'center',alignItems:'center'}}
                onPress={()=>{

                        this.props.getOneTacks(this.props.token,++(this.state.id));
                 
                }
                }>

                        
                         <FontAwesome 
                           name='forward'
                           size={25}
                           color={Colors.darkGrey}
                           />

                </TouchableOpacity>

               </View>


        

            </View>
           

             </View>
        );
    }
}

const styles = StyleSheet.create({

    ItemView:{
        flexDirection:'row'
    }



});

const mapStateToProps=({login,facebook,tracks})=>{

    return{
    loading :login.loading,
    token:login.token||facebook.token,
    tracks:tracks.tracks,
    track:tracks.track
  };
  };
  
  
  export default  connect(mapStateToProps,{getOneTacks})(Home) 