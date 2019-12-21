import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Home = (props)=>{
    return(
           <View style={styles.container}>
            <Image source={require('./home.jpg')} style={styles.img1}/>
            <View style={styles.img2}></View>
            <View style={styles.img3}></View>
            <View style={styles.img4}></View>
           </View>
    )
}

const styles = StyleSheet.create({
            container:{
              
                
            },
            img1:{
                height:400,
                width:420
            },
            img2:{
                height:400,
                width:400
            },
            img3:{
                height:400,
                width:400
            },img4:{
                height:400,
                width:400
            }
})

export default Home;