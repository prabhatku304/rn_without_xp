import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Home from '../../component/home/home';
import RentPay from '../../component/payment/rentPay';



const RentNavigation = createStackNavigator({
               home:{screen:Home}
})



const DrawerNavigator = createDrawerNavigator({
       home:{screen:RentNavigation},
       pay:{screen:RentPay}
})
export default createAppContainer(DrawerNavigator)