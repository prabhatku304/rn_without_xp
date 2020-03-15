import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../component/home/home';
import Login from '../component/reduxform/login';
import Register from '../component/reduxform/register';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainContainer = (props)=>{

    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="home" component={Home} />
            </Drawer.Navigator>
           <Stack.Navigator>
             
               <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Register} />
           </Stack.Navigator>
        </NavigationContainer>
    )

}
export {MainContainer};