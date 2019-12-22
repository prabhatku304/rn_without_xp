import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Home from '../../component/home/home';
import RentPay from '../../component/payment/rentPay';
import Check from '../../component/reduxform/checkuser';
import Login from '../../component/reduxform/login';
import Register from '../../component/reduxform/register';
import Logout from '../../component/reduxform/logout'



const RentNavigation = createStackNavigator({
               home:{screen:Home}
})



const DrawerNavigator = createDrawerNavigator({
       home:{screen:RentNavigation},
       pay:{screen:RentPay},
       logout :{screen:Logout}
})

const SwitchNavigator = createSwitchNavigator({
       Auth : Check,
       login:Login,
       home:DrawerNavigator
})
export default createAppContainer(SwitchNavigator)