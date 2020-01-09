import React ,{Component} from 'react';
import {View,Modal,Text} from 'react-native'

class DocumentModal extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }


    render(){
        return(
            <Modal
            animationType="slide"
            visible={this.state.isOpen}
            onRequestClose={this.close}
            >
             <Text>Hello</Text>
            </Modal>
        )
    }
}

export default DocumentModal;