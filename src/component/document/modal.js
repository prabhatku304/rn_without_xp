import React ,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,Button,ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import Header from '../../container/button'

class DocumentModal extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:true,
            active:false
        }
    }

    handleSubmit = ()=>{
        this.setState({active:true})
        this.props.handleSubmit()
           .then(res=>{this.setState({isOpen:false,active:false})})
           .catch(err=>console.log(err))
        
    }
    close=()=>{
        this.setState({isOpen:false})
        this.props.handleModal()
    }
    show=()=>{
        this.setState({isOpen:true})
    }
    
    render(){
        console.log(this.props.url.uri)
        return(
          <View >
            <Modal
           
            isVisible={this.state.isOpen}
           
           swipeDirection={ ['right']}
           style={styles.container}
            > 
            <HeaderButtons HeaderButtonComponent={Header}  >
                <Item iconName="ios-close-circle-outline" title="cross" onPress={this.close} style={{marginLeft:-120}}/>
            </HeaderButtons>
                <Image source={{uri:this.props.url.uri}} style={{height:200,width:200,borderRadius:5}}  />
               {this.state.active ? (<ActivityIndicator size="large" color="#00ff00" />):(null)}
            
             <Button title="Upload"  style={styles.button_sub} color="#535c68"
                  touchSoundDisabled={false}
                 onPress={this.handleSubmit}
             />
            
            </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        justifyContent:"space-evenly",
        
       
    },
    button_sub:{
         backgroundColor:"#535c68",
        height:30,
        width:60,
       
    }
})

export default DocumentModal;