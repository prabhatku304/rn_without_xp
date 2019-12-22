import React from 'react';
import {View,AsyncStorage} from 'react-native';


const Check = (props)=>{
       let currentUser ;
       AsyncStorage.getItem('jwtToken')
         .then(res=>currentUser = res)
         .catch(err=>console.log(err))
      console.log(currentUser)    
       if(!currentUser){
          return props.navigation.navigate({routeName:"login"})
       }else{
           return props.navigation.navigate({routeName:"home"});
       }
       return(
           <View></View>
       )
}


export default Check;