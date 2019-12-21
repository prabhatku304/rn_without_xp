import React, {Component} from 'react';
import {ImageBackground,View,StyleSheet,TextInput,Text,TouchableOpacity,Button,ActivityIndicator} from 'react-native';
import {reduxForm,Field} from 'redux-form';

import {connect} from 'react-redux';
import {addUser} from '../../store/action/auth/auth'
import Register from './register';

class Login extends Component{
      constructor(props){
          super(props);
          this.state={
              isRegister:false,
              isLoad:false
          }
      }

      renderInput = (field)=>{
              
        return(
            <View>
                <Text style={{...styles.label,color:"#FD9441"}}>{field.label}</Text>
                <TextInput style={styles.input} type={field.type} 
                onChangeText = {field.input.onChange}
               
                />
               
            </View>
        )
      }
     onSubmit (value){
         
         this.setState({isLoad:true})
             this.props.addUser(value,"signin")
                 .then(res=>{this.setState({isLoad:false}) ; this.props.navigation.navigate({routeName:"home"})})
                 .catch(err=>alert("something went wrong"))
      }
     handleRegister = ()=>{
        this.setState({isRegister:true})
     }
     changeLogin = ()=>{
         this.setState({isRegister:false})
     }
      render(){
          const {isRegister} = this.state;
         if(isRegister) {
          return(<Register changeLogin={this.changeLogin}/>)   
         }else{return(
            <ImageBackground source={require('./login.jpg')} style={{width: '100%', height: '100%'}}>
          
                <View style={styles.container}>
                <Field
                 component={this.renderInput}
                 name="username"
                 label="username"
                 type="text"
                 />
                 <Field
                 component={this.renderInput}
                 name="password"
                 label="password"
                 type="password"
                 />
                  {this.state.isLoad ? (<View style={{marginTop:80}}><ActivityIndicator size="large" color="#00ff00"/></View>) :(null)}
                  <View style={styles.auth}>
                  <TouchableOpacity style={styles.login} onPress={this.props.handleSubmit(this.onSubmit.bind(this))}>
                        <Text style={{fontSize:17,letterSpacing:2,color:"#FD9441",fontWeight:"bold"}}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleRegister}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                   
                </View>
              </View>
         
         
            </ImageBackground>
          )}
            
          
      }
}

function validate(value){
    let error ={};
    if(!value.username){
        error.username="enter username"
    }
    if(!value.password){
        error.password="enter password"
    }
    return error;
}

const styles = StyleSheet.create({
       container:{
           flex:1,
           justifyContent:"center",
           alignItems:"center",
          
       },
       auth:{
           
           flexDirection:"column",
           justifyContent:"space-between",
           marginTop:150
       },
       input:{
           backgroundColor:"green",
           width:250,
           height:35,
           borderRadius:5
       },
       label:{
           marginTop:30,
           letterSpacing:3,
           textShadowColor: "blue",
           fontSize:20
       },
       login:{
           height:30,
           width:120,
           borderRadius:3,
           marginBottom:10,
           backgroundColor:"#1A3970",
           alignItems:"center",
           padding:4,
           
       }
})


export default reduxForm({validate:validate,
    form:"login"})(connect(null,{addUser})(Login))