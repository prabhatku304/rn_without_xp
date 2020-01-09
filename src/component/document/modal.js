import React ,{Component} from 'react';
import {View,Modal,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'

class DocumentModal extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:true
        }
    }

    handleSubmit = ()=>{
        this.props.handleSubmit();
    }
    close=()=>{
        this.setState({isOpen:false})
    }

    render(){
        console.log(this.props.url.uri)
        return(
            <View>
            <Modal
            animationType="slide"
            visible={this.state.isOpen}
            onRequestClose={this.close}
            transparent={false}
            >
                <Image source={{uri:this.props.url.uri}} style={{height:"400px",width:"400px"}}  />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text>Submit</Text>
                </TouchableOpacity>
             <Text>Hello</Text>
            </Modal>
            </View>
        )
    }
}

export default DocumentModal;