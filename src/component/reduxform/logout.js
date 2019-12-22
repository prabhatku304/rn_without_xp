import React from 'react';
import {logout} from '../../store/action/auth/auth';
import {connect} from 'react-redux';
import {View} from 'react-native'
const Logout = (props)=>{

        props.logout()
            .then(res=>{
               
                props.navigation.navigate({routeName:"login"})
            }).catch(err=>console.log(err))
        
        return(
            <View></View>
        )
}

export default connect(null,{logout})(Logout);