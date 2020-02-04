import React , {Component} from 'react';
import {View,Button,Text,StyleSheet,TouchableOpacity} from 'react-native';
import RazorPayCheckout from 'react-native-razorpay'

class  RazorPay extends Component{
    constructor(props){
        super(props);

    }

    getOption = ()=>{
        const options = {
            description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_live_NEpwE1NpiynEwl',
          amount: '5000',
          external: {
            wallets: ['paytm']
          },
          name: 'foo',
          prefill: {
            email: 'prabhatku304@gmail.com',
            contact: '8955806560',
            name: 'Prabhat'
          },
          theme: {color: '#F37254'}
        } 

        RazorPayCheckout.open(options)
             .then(data=>alert(`success: ${data.razorpay_payment_id}`))
              .catch(err=>alert(err))
        
        RazorPayCheckout.onExternalWalletSelection(data=>{
            alert(`external : ${data.external_wallet}`)
        })

            }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.getOption}>
                  <Text style={styles.text}>Pay</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
            container:{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#F5FCFF"
            },
            text:{
                fontSize:20,
                fontWeight:"bold"
            }
})

export {RazorPay};