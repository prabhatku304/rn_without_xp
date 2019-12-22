import React from 'react';
import {View,Text,Modal,Alert} from 'react-native';
// import {PaymentsStripe as Stripe} from 'expo-payments-stripe'



class Pay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:'',
            expMonth:null,
            expYear:null,
            cvc: '',
            name: '',
            modal:false
            
        }
    }
    

    render(){
        return(
            <View>
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modal === true}
                onRequestClose={this.props.closeModal}
                
                >
                    <Text >Hello</Text>
                        
                </Modal>
            </View>
        )
    }


}

export default Pay;