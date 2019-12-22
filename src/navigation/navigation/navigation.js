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
import { Ionicons } from '@expo/vector-icons';



const RentNavigation = createStackNavigator({
               home:{screen:Home}
})



const DrawerNavigator = createDrawerNavigator({
       home:{screen:RentNavigation,
              navigationOptions:{
                 drawerIcon:(tab)=><Ionicons name="ios-home" size={25} color={tab.tintColor}/>
              }},
       pay:{screen:RentPay,
            navigationOptions:{
                   drawerIcon:(tab)=><Ionicons name="ios-wallet" size={25} color={tab.tintColor} />
            }},
       logout :{screen:Logout,
                navigationOptions:{
                       drawerIcon:(tab)=> <Ionicons name="ios-log-out" size={25} color={tab.tintColor} />
                }}
},{
       drawerType:"front",
       contentOptions:{
              activeTintColor:"#FA613F"
       }
})

const SwitchNavigator = createSwitchNavigator({
       home:DrawerNavigator,
       login:Login,
       
})
export default createAppContainer(SwitchNavigator)