import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../component/home/home';



const RentNavigation = createStackNavigator({
               home:{screen:Home}
})

export default createAppContainer(RentNavigation)