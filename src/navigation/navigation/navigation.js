import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import Home from '../../component/home/home';



const RentNavigation = createStackNavigator({
               home:{screen:Home}
})

const DrawerNavigator = createDrawerNavigator({
       home:RentNavigation
})
export default createAppContainer(DrawerNavigator)