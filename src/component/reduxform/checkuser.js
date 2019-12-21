import React from 'react';
import {View,AsyncStorage} from 'react-native';


const Check = (props)=>{
       let currentUser = AsyncStorage.getItem('jwtToken');
       if(currentUser){
           props.navigation.navigate({routeName:"home"})
       }else{
           props.navigation.navigate({routeName:"login"});
       }
}


export default Check;