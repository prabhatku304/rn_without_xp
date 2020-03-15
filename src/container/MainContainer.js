import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../component/home/home';
import Login from '../component/reduxform/login';
import Register from '../component/reduxform/register';
import { BottomNavigator } from './BottomNavigator/BottomNavigator';
import Profile from '../component/profile/profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainContainer = (props)=>{

    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="home" component={BottomNavigator} />
                <Drawer.Screen name="profile" component = {Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
    )

}
export {MainContainer};