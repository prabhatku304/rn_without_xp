
// import {PaymentsStripe as Stripe} from 'expo-payments-stripe'

import stripe from 'tipsi-stripe'
stripe.setOptions({
    publishableKey:"pk_test_EcDcCoAGVRMU3RPq8ZY6Xyri",
    androidPayMode:"production"
})
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import Axios from 'axios'

const params = {
    // mandatory
    number: '4242424242424242',
    expMonth: 11,
    expYear: 17,
    cvc: '223',
    // optional
    name: 'Test User',
    currency: 'usd',
    addressLine1: '123 Test Street',
    addressLine2: 'Apt. 5',
    addressCity: 'Test City',
    addressState: 'Test State',
    addressCountry: 'Test Country',
    addressZip: '55555',
  }

export default class CardFormScreen extends PureComponent {
  static title = 'Card Form'

  state = {
    loading: false,
    token: null,
  }

  handleCardPayPress = async () => {
    try {
      this.setState({ loading: true, token: null })
      
      let token = await stripe.paymentRequestWithCardForm({
       
            card:{name: 'prabhat kumar',
            line1: 'ramcharan tola,mokama',
            line2: '',
            addressCity: 'Mokama',
            state:'Bihar',
            country: 'IND',
            postalCode: '803302',
            email: 'prabhatkmr5789@gmail.com',}
        
      })
    //    token.card.cvc=461;
    //    token.card.name="prabhat kumar";
    //    token.card.addressCountry = "IN"
    //    token.card.addressZip= '803302',
    //    token.card.addressLine1 = "mokama"
    //    token.card.currency="INR"
    //    token.card.number= '4591150108415332'
       console.log(token)
      
      this.setState({ loading: false, token })
    } catch (error) {
      this.setState({ loading: false })
    }
  }

  payment = ()=>{
      this.setState({loading:true});
      console.log(this.state.token)
      let data = {};
      data.token = this.state.token;
      data.amount = 50;
      data.name = "prabhat"
      Axios.post("http://3dc3f1fe.ngrok.io/api/5df741ae47e2960017c015ae/rent",data)
      .then(res=>{this.setState({loading:false})
        console.log(res)})
      .catch(err=>{
          console.log(err)
          alert(err)
        this.setState({loading:false})})
  }

  render() {
    const { loading, token } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Card Form Example
        </Text>
        <Text style={styles.instruction}>
          Click button to show Card Form dialog.
        </Text>
        <Button
          text="Enter you card and pay"
          loading={loading}
          onPress={this.handleCardPayPress}
          
        />
        <View
          style={styles.token}
        >
          {token &&
           (<> 
           <Text style={styles.instruction}>
              Token: {token.tokenId}
            </Text>
            <Button 
              text="Make Payment"
              loading={loading}
              onPress={this.payment}
            />
            </>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
})

// class Pay extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             number:'',
//             expMonth:null,
//             expYear:null,
//             cvc: '',
//             name: '',
//             modal:false
            
//         }
//     }
    

//     render(){
//         return(
//             <View>
//                 <Modal
//                 animationType="slide"
//                 transparent={false}
//                 visible={this.props.modal === true}
//                 onRequestClose={this.props.closeModal}
                
//                 >
                    
                        
//                 </Modal>
//             </View>
//         )
//     }


// }

// export default Pay;