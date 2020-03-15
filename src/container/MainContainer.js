import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../component/home/home';
import Login from '../component/reduxform/login';
import Register from '../component/reduxform/register';
import { BottomNavigator } from './BottomNavigator/BottomNavigator';
import Profile from '../component/profile/profile';
import Dashboard from '../component/dashboard';
import { RazorPay } from '../component/RazorPay/RazorPay';
import RentPay from '../component/payment/rentPay';
import Logout from '../component/reduxform/logout';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainContainer = (props)=>{

    return(
        <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={{activeTintColor:"#FA613F",itemStyle:{marginVertical:0,marginTop:20}}}
             drawerType="front"
             drawerStyle={{
                
             }}
            >
                <Drawer.Screen name="home" component={BottomNavigator} options={{drawerLabel:"Home",unmountOnBlur:true,drawerIcon:(tab)=><Ionicons name="ios-home" size={25} color={tab.color} />}}
                
                />
                <Drawer.Screen name="profile" component = {Profile} options={{drawerLabel:"Profile",drawerIcon:(tab)=><Ionicons name="ios-person" size={25} color={tab.color} />}} />
                <Drawer.Screen name="dashboard" component={Dashboard} />
                <Drawer.Screen name="pay" component={RentPay} />
                <Drawer.Screen name="logout" component={Logout} />
            </Drawer.Navigator>
        </NavigationContainer>
    )

}
export {MainContainer};