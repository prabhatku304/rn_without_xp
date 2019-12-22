import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import Header from '../../container/button';
const Home = (props)=>{
    return(
           <View style={styles.container}>
               <ScrollView>
            <Image source={require('./home.jpg')} style={styles.img1}/>
            <View style={styles.img2}></View>
            <View style={styles.img3}></View>
            <View style={styles.img4}></View>
            </ScrollView>
           </View>
    )
}

Home.navigationOptions = (propsData)=>{
    return{
        headerTitle:"Rent",
        headerLeft: <HeaderButtons HeaderButtonComponent={Header}>
            <Item title="bar" iconName="ios-menu" onPress={()=>propsData.navigation.toggleDrawer()} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
            container:{
              
                display:'flex',
               alignItems:"center"
            },
            img1:{
                height:400,
                width:400
            },
            img2:{
                height:400,
                width:400,
                backgroundColor:"#282C34"
            },
            img3:{
                height:400,
                width:400,
                backgroundColor:"#3D2755"
            },img4:{
                height:400,
                width:400,
                backgroundColor:"#5F7C5F"
            }
})

export default Home;