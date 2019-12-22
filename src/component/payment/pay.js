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
            
        }
    }
    componentDidMount(){
        // Stripe.setOptionsAsync({
        //     publishableKey:"pk_test_EcDcCoAGVRMU3RPq8ZY6Xyri",
        //     androidPayMode:'test'
        // })
    }

    render(){
        return(
            <View>
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modal === true}
                onRequestClose={()=>this.props.modal===false}
                
                >
                    <Text>hello</Text>

                </Modal>
            </View>
        )
    }


}

export default Pay;