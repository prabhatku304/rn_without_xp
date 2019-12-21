import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Home = (props)=>{
    return(
           <View style={styles.container}>
            <Image source={require('./home.jpg')} />
           </View>
    )
}

const styles = StyleSheet.create({
            container:{
                flex:1,
                
            }
})

export default Home;