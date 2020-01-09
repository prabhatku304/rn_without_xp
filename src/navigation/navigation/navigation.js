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
import  Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../../component/dashboard';
import Profile from '../../component/profile/profile';
import ChatRoom from '../../component/chatRoom/chat';
import DocumentId from '../../component/document/document'


const RentNavigation = createStackNavigator({
               home:{screen:Home},
               Dashboard:{screen:Dashboard}
},{mode:'modal'})

const DashboardNavigation = createStackNavigator({
       Dashboard:{screen:Dashboard}
})
const ProfileTab = createStackNavigator({
       profile:{screen:Profile}
})
const Tabconfig = {
       Home:{screen:RentNavigation,
           navigationOptions:{
                  tabBarIcon:(tab)=> <Ionicons name="ios-home" size={25} color={tab.tintColor} />,
                  tabBarColor:"#045BBC"       
              }},
       Dashboard : {screen:Dashboard,
                  navigationOptions:{
                   tabBarIcon : (tab)=> <Ionicons name="ios-paper" size={25} color={tab.tintColor} />,
                   tabBarColor : "#FA5740"
                  }}
       
}

const DocumentNew = createStackNavigator({
       document:{screen:DocumentId}
})

const BottomNavigator = (Platform.OS==='android'?createMaterialBottomTabNavigator(Tabconfig,{
       activeColor:'white',
       shifting:true
  }) : createBottomTabNavigator(Tabconfig) )

const DrawerNavigator = createDrawerNavigator({
       Home:{screen:BottomNavigator,
              navigationOptions:{
                 drawerIcon:(tab)=><Ionicons name="ios-home" size={25} color={tab.tintColor}/>
              }},
       Profile:{screen:ProfileTab,
              navigationOptions:{
                     drawerIcon:(tab)=><Ionicons name="ios-person" size={25} color={tab.tintColor} />
              }
       },
       Pay:{screen:RentPay,
            navigationOptions:{
                   drawerIcon:(tab)=><Ionicons name="ios-wallet" size={25} color={tab.tintColor} />
            }},
       dashboard:{screen:DashboardNavigation,
                navigationOptions:{
                     drawerIcon:(tab)=><Ionicons name="ios-paper" size={25} color={tab.tintColor} />
                }},
       Document:{screen:DocumentNew,
                navigationOptions:{
                       drawerIcon:(tab)=><Ionicons name="ios-document" size={25} color={tab.tintColor} />
                } 
                },
       Chat : {screen:ChatRoom,
                navigationOptions:{
                drawerIcon:(tab)=><Ionicons name="ios-chatboxes" size={25} color={tab.tintColor}/> 
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