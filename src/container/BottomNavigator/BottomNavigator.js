import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../component/home/home';
import Dashboard from '../../component/dashboard';

const Tab = createBottomTabNavigator();

const BottomNavigator = (props)=>{

    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="dashboard" component={Dashboard} />
        </Tab.Navigator>
    )
}

export {BottomNavigator}