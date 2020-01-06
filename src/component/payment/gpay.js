import React from 'react';
import {View,Text} from 'react-native'
import stripe from 'tipsi-stripe';
stripe.setOptions({
    publishableKey:"pk_live_6eX2vt1vstuqozy0t1RAmtpO",
    androidPayMode:"production"
})

const Gpay = (props)=>{
        
           React.useEffect(async ()=>{
              const isSupport = await stripe.canMakeAndroidPayPayments();
              alert(isSupport)
              if(isSupport){
                  let gpay = await stripe.paymentRequestWithAndroidPay({
                    total_price: '80.00',
                    currency_code: 'INR',
                    shipping_address_required: false,
                    billing_address_required: true,
                    shipping_countries: ["US", "CA"],
                    line_items: [{
                      currency_code: 'IND',
                      description: 'Whisky',
                      total_price: '50.00',
                      unit_price: '50.00',
                      quantity: '1',
                    }, {
                      currency_code: 'IND',
                      description: 'Vine',
                      total_price: '30.00',
                      unit_price: '30.00',
                      quantity: '1',
                    }],
                  })
                  console.log(gpay)
              }
           },[])
           return(
               <View><Text>hello</Text></View>
           )
}

export default Gpay;