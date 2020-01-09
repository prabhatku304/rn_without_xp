import React ,{Component} from 'react';
import {View,Modal,Text,Image} from 'react-native'

class DocumentModal extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }


    render(){
        return(
            <View>
            <Modal
            animationType="slide"
            visible={this.state.isOpen}
            onRequestClose={this.close}
            >
                <Image source={{uri:this.props.uri}}  />
             <Text>Hello</Text>
            </Modal>
            </View>
        )
    }
}

export default DocumentModal;