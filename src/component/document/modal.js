import React ,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,Button} from 'react-native';
import Modal from 'react-native-modal'

class DocumentModal extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:true
        }
    }

    handleSubmit = ()=>{
        this.props.handleSubmit();
        this.setState({isOpen:false})
    }
    close=()=>{
        this.setState({isOpen:false})
    }
    show=()=>{
        this.setState({isOpen:true})
    }
    
    render(){
        console.log(this.props.url.uri)
        return(
          <View>
            <Modal
           
            isVisible={this.state.isOpen}
           
           onBackdropPress={this.close}
           swipeDirection={ ['right']}
           style={styles.container}
            > 
           
                <Image source={{uri:this.props.url.uri}} style={{height:200,width:200,borderRadius:5}}  />
               
            
             <Button title="Upload" onPress={this.handleSubmit} style={styles.button} />
            
            </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
       
        justifyContent:"flex-end",
        alignItems:"center",
        justifyContent:"space-evenly"
       
    },
    button_sub:{
        height:200,
        width:200
    }
})

export default DocumentModal;