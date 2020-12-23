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
import DocumentModal from '../component/document/document';
import Chat from '../component/chatRoom/chat';
import { Sequence } from '../component/Test/button';
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
                <Drawer.Screen name="dashboard" component={Dashboard} options={{drawerIcon:(tab)=><Ionicons name="ios-paper" size={25} color={tab.color} /> , drawerLabel:"Dashboard"}} />
                <Drawer.Screen name="pay" component={RentPay} options={{drawerLabel:"Pay",drawerIcon:(tab)=><Ionicons name="ios-wallet" size={25} color={tab.color} />}}/>
                <Drawer.Screen name="document" component={DocumentModal} options={{drawerLabel:"Document",drawerIcon:(tab)=><Ionicons name="ios-document" size={25} color={tab.color} />}}/>
                <Drawer.Screen name="chat" component={Chat} options={{drawerLabel:"Chat Room",drawerIcon:(tab)=><Ionicons name="ios-chatboxes" size={25} color={tab.color} />}}/>
                <Drawer.Screen name="test" component={Sequence} />
                <Drawer.Screen name="logout" component={Logout} options={{drawerLabel:"Logout",drawerIcon:(tab)=><Ionicons name="ios-log-out" size={25} color={tab.color} />}}/>

            </Drawer.Navigator>
        </NavigationContainer>
    )

}
export {MainContainer};