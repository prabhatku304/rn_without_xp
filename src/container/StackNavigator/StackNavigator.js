import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../component/home/home';
import Login from '../../component/reduxform/login';
import Register from '../../component/reduxform/register';

const Stack = createStackNavigator();

const StackNavigator = (props)=>{

    return(
        <Stack.Navigator>
            <Stack.Screen name="home" container={Home} />
            <Stack.Screen name="login" container={Login} />
            <Stack.Screen name="register" container={Register} />
        </Stack.Navigator>
    )
}

export {StackNavigator}