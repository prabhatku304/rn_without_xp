import React ,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,Button,ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import FontIcon from 'react-native-vector-icons/Feather'
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
        // this.props.handleSubmit()
        //    .then(res=>{this.setState({isOpen:false,active:false})})
        //    .catch(err=>console.log(err))
        
    }
    close=()=>{
        this.setState({isOpen:false})
        this.props.handleModal()
    }
    show=()=>{
        this.setState({isOpen:true})
    }
    
    render(){
        return(
          <View >
            <Modal
           
            isVisible={this.state.isOpen}
           
           swipeDirection={ ['right']}
           style={styles.container}
            > 
            <View style={styles.container}>
            
               <View style={{ alignItems:'center', height:'80%'}}>
                
               {this.state.active ? (<ActivityIndicator size="large" color="#00ff00" />):(
                   <Image source={{uri:this.props.url.uri}} 
                   style={{height:'100%', width:'100%' ,borderRadius:5}}  
                   />
               )}
               </View>
               <View style={{overflow:'hidden', borderRadius:2 }}>
                    <Button title="Upload"  style={{...styles.button_sub}} color="#535c68"
                        touchSoundDisabled={false}
                        onPress={this.handleSubmit}
                    />
                    
             </View>
             <View >
                 <TouchableOpacity onPress={this.close} >
                     <FontIcon name="arrow-left" color="black"  size={50} />
                 </TouchableOpacity>
             {/* <HeaderButtons HeaderButtonComponent={Header}  >
                <Item iconName="ios-close-circle-outline" title="cross" onPress={this.close} style={{marginLeft:-120}}/>
            </HeaderButtons> */}
            </View>
             </View>
            </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around",
        display: 'flex'

    },
    button_sub:{
         backgroundColor:"#535c68",
        height:30,
        width:60,
        borderRadius: 10,
        fontWeight: 'bold'
       
    }
})

export default DocumentModal;