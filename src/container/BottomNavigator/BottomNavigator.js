import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../component/home/home';
import Dashboard from '../../component/dashboard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = (props)=>{

    return(
        <Tab.Navigator shifting={true}>
            <Tab.Screen name="home" component={Home} options={{tabBarLabel:"Home",tabBarColor:"#045BBC",tabBarIcon:(tab)=>(<MaterialCommunityIcons name="home" size={26} color={tab.color} />)}} />
            <Tab.Screen name="dashboard" component={Dashboard} options={{tabBarLabel:"Dashboard",tabBarColor:"#FA5740",tabBarIcon:(tab)=>(<MaterialCommunityIcons name="view-dashboard" size={26} color={tab.color} />)}} />
        </Tab.Navigator>
    )
}

export {BottomNavigator}