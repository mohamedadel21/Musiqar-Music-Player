import React, { Component } from 'react';
import { Text, StyleSheet,TouchableOpacity, View ,ScrollView} from 'react-native';
import Colors from '../Constant/Colors'
import {Button} from 'react-native-elements';
import { MaterialIcons,Ionicons,EvilIcons,FontAwesome } from '@expo/vector-icons';
import Header from '../common/Header';
import { FlatGrid } from 'react-native-super-grid';
import Item from '../common/Item';
import { connect } from 'react-redux';
import { getAllTacks } from '../actions';
import {trackUrl,imageUrl} from '../Constant/Urls';

class Home extends Component {


    componentWillMount(){
        this.props.getAllTacks(this.props.token);
    }

    componentWillReceiveProps(nxt){

        if(nxt.tracks){
            this.setState({items:nxt.tracks});


        }

    }

    constructor(props){

        super(props);
    
        this.state={
         items:[]
        }
    
      }

    _renderItem =({item})=>{

        const titleLength= String( item.title).length;
        const title=String( item.title).substr(3,titleLength)

        const views=item.views+' View';
        return(
    
            <Item
            image={imageUrl+item.uploader.image}
            text={title}
            views={views}
            
            onPress={()=>{

                this.props.navigation.navigate('Player',{item});

            }}
            />

        )
    
        }

    render() {


        return (
            
            <View style={{flex:1,flexDirection:'column',}}>

            <Header navOption='false' navColor={Colors.none}  navigation={this.props.navigation} backgroundColor={Colors.white} color={Colors.none}/>
            
            <FlatGrid

                 spacing={10}
                itemContainerStyle={{padding:3}}
                 items={this.state.items}
                 renderItem={this._renderItem}
                 />

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
    tracks:tracks.tracks
  };
  };
  
  
  export default  connect(mapStateToProps,{getAllTacks})(Home) 