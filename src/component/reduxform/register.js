import React ,{useState,useEffect} from 'react';
import {View,TouchableOpacity,ScrollView,StyleSheet,Text,ImageBackground,TextInput,ActivityIndicator} from 'react-native';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import {addUser} from '../../store/action/auth/auth';


class Register extends React.Component {
    
       constructor(props){
           super(props);
           this.state={
               isLoad:false
           }
       }
       renderField = (field)=>{
        
           return(
               <View style={styles.textbox}>
                  <Text style={styles.label}>{field.label}</Text>
                  <TextInput
                  type={field.type} 
                  onChangeText={field.input.onChange}
                  style={styles.text}
                  />
                {field.meta.touched ?(<Text style={{color:"red"}}>{field.meta.error}</Text>):(null)}
               </View>
           )
      }
      onSubmit (value){
           console.log(value);
           this.setState({isLoad:true})
           this.props.addUser(value,"signup")
               .then(res=>{
                  this.setState({isLoad:false})   
                this.props.changeLogin()})
               .catch(err=>alert(err))
      }
      render(){
      return(
            <ImageBackground source={require('../../../assets/register.jpg')} style={{height:"100%",width:"100%",...styles.image}}>
              <View style={styles.container}>
             
                <Field 
                component={this.renderField}
                name="username"
                label="username"
                type="text"
                />
                <Field 
                component={this.renderField}
                name="email"
                label="email"
                type="text"
                />
                <Field 
                component={this.renderField}
                name="mobile"
                label="mobile"
                type="text"
                />
                <Field 
                component={this.renderField}
                name="password"
                label="password"
                type="password"
                />
            
    
               </View>
               <View style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
               <TouchableOpacity style={styles.register} onPress={this.props.handleSubmit(this.onSubmit.bind(this))}>
                   <Text style={{fontSize:15,letterSpacing:2,color:"#FD9441",fontWeight:"bold"}}>Register</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.login} onPress={this.props.changeLogin}>
                   <Text style={{fontSize:15,letterSpacing:2,color:"#fff",fontWeight:"bold"}}>Login </Text>
               </TouchableOpacity>
               </View>
               {this.state.isLoad ? (<ActivityIndicator size="large" color="#00ff00"/>):(null)}
              
            </ImageBackground>
      )
      }
}

function validate(value){
    let error={};
    if(!value.username){
        error.username="please enter username"
    }
    if(!value.password){
        error.password="enter your password"
    }
    if(!value.email){
        error.email="enter your email id"
    }
    return error;
}

export default reduxForm({form:"register",validate})(connect(null,{addUser})(Register));

const styles = StyleSheet.create({
                 container:{
                     backgroundColor:"#fff",
                     height:500,
                     width:300,
                     borderRadius:5,
                     display:"flex",
                     justifyContent:"space-evenly"
                
                 },
                 image:{
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"space-evenly"
                 },
                 text:{

                     paddingLeft:20,
                     backgroundColor:"#F3F7F7",
                     height:50,
                     color:"green",
                     fontSize:20
                    
                 },
                 textbox:{
                    padding:13
                 },
                 label:{
                   fontSize:18,
                   letterSpacing:2,
                   fontWeight:"bold"
                 },
                 register:{
                     backgroundColor:"#231F20",
                     height:30,
                     width:100,
                     padding:5,
                     fontSize:30,
                     fontWeight:"bold",
                      borderRadius:5,
                      opacity:1
                 },
                 login:{
                   paddingLeft:30
                 }

})