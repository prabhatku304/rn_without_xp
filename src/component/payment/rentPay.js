import React,{Component} from 'react';
import {Button,View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {connect} from 'react-redux';
import {Ionicons} from '@expo/vector-icons'
class RentPay extends Component{
    constructor(props){
        super(props);
        this.state={
          
                amount:null,
                date:""
          ,
            isCalender:false
           
        }

    }
 
     Pay = () =>{
        Rent(this.state,this.props.user_id)
          .then(res=>alert("you have paid"))
          .catch(err=>console.log(err));
     }
    

    openCalender=()=>{
       this.setState({isCalender:true})
    }

    hideCalender =()=>{
        this.setState({isCalender:false})
    }

    selectDate=(date)=>{
  
      this.setState({  date:date
      });
      date = JSON.stringify(date)
      this.tempDate = date.split("T");
      this.newDate = this.tempDate[0];
    
      this.hideCalender();
    }

    render(){
     
   
        return(
            <View style={styles.container}>
              
              <View style={styles.rent}>
               
             <TextInput 
              label="amount"
               value={this.state.amount}
               onChangeText = {(text)=>this.setState({amount:text})}
               style={styles.amountInput}
             />
            <Text>{this.newDate}</Text>
             <TouchableOpacity
             onPress={this.openCalender}
             style={styles.buttonCalender}
             ><Text>Date</Text></TouchableOpacity>
             <DateTimePicker 
               isVisible={this.state.isCalender}
               onConfirm={this.selectDate}
               onCancel={this.hideCalender}
               />

               <TouchableOpacity style={styles.pay} onPress={this.Pay}><Text style={styles.paytm}>Pay with paytm</Text></TouchableOpacity>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate({routeName:"home"})} style={{paddingTop:30}}><Ionicons color="white" name="ios-menu" size={25}/></TouchableOpacity>
             </View>
             </View>
        )
    }
}

const styles = StyleSheet.create({
          container:{
             display:"flex",
             flex:1,
              padding:100,
              
              alignItems:"center",
              backgroundColor:"#363636"
          },
          amountInput:{
              backgroundColor:"#CDCED3",
              width:280,
              height:50,
              borderRadius:10,
              fontSize:20,
              fontWeight:"bold",
              letterSpacing:3,
              color:"blue",
              textAlign:"center"
          },
          buttonCalender:{
              padding:20,
              backgroundColor:"#F35F44",
            height:60,
            width:100,
            marginTop:60,
            borderRadius:100,
            alignItems:"center",
            shadowOffset: { width: 20, height: 20 },
                
                shadowOpacity: 1,
                elevation: 10,
          },
          pay:{
            
                marginTop:50,
                height:90,
                width:100,
                borderRadius:70,
                backgroundColor:"#fff",
                shadowOffset: { width: 20, height: 20 },
                
                shadowOpacity: 1,
                elevation: 10,
          },
          paytm:{
              marginTop:20,
              marginLeft:10,
              color:"blue",
              letterSpacing:0.2,
              fontWeight:"bold",
              fontSize:20
          },
          rent:{
            backgroundColor:"white",
            display:"flex",
             flex:1,
              padding:100,
              
              alignItems:"center",
              width:300,
              borderRadius:20
          }

})

function mapStateToProps(state){

  return{
    user_id : state.set_user.user.id
  }
}

export default RentPay;