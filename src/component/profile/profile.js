import React ,{Component} from 'react';
import {View,Button,Image,Text,StyleSheet,ImageBackground} from 'react-native';
import Axios from 'axios';
import {connect} from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../container/button'

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{}
        }
    }

    componentDidMount(){
        console.log(this.props.id)
        Axios.get('https://renter-server.herokuapp.com/api/user/5e0b9eb31a5e3c001779fe77')
             .then(res=>{
                console.log(res.data) 
                this.setState({user:res.data})})
             .catch(err=>console.log(err))
    }
    render(){
        let user = this.state.user
        
        return(
            <ImageBackground source={require('./profile.png')} style={{width:"100%",height:"100%"}}>
            <View style={styles.container}>
                <Image source={{uri:"https://owips.com/sites/default/files/clipart/profile-clipart/230017/profile-clipart-dummy-230017-3860031.png"}} style={styles.profileImage}/>
           
                <Text style={styles.usernameStyle}>Username : {user.username}</Text>
                <Text style={styles.emailStyle}>Email : {user.email}</Text>
                <Text style={styles.roomStyle}>Room no. : 8</Text>
                <Text style={styles.mobileStyle}>mobile : </Text>
            
            </View>
            </ImageBackground>
        )
    }
}

Profile.navigationOptions = (propData)=>{
    return{
        headerTitle:"Profile",
        headerLeft:<HeaderButtons HeaderButtonComponent ={HeaderButton}>
            <Item title="tabl" iconName="ios-menu" onPress={()=>propData.navigation.toggleDrawer()} />
        </HeaderButtons>
    }
}
const styles = StyleSheet.create({
          container:{
            flex:1,
              justifyContent:"space-around",
              flexDirection:"column",

          },
          profileStyle:{

          flex:1,
             justifyContent:"space-evenly",
             shadowOffset: { width: 20, height: 20 },
             shadowColor: '#fff',
             shadowOpacity: 1,
             elevation: 3,
             backgroundColor : "#ffff",
             borderRadius:10

          },
          profileImage:{
            position: "absolute",
            width: 110,
            height: 113,
            left: 153,
            top: 40.38,
            
            // boxShadow: inset 0 4 4 rgba(0, 0, 0, 0.25)

          },usernameStyle:{
            position: "absolute",
            width: 363,
            height: 56,
            left: 20,
            top: 318,
            
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 24,
            lineHeight: 28,
            
            color: "#FFFFFF",
            borderRadius:1,
            borderColor:"#CCBEBE",
            borderWidth:0,
            borderStyle:"solid",
            textShadowColor:"rgba(0, 0, 0, 0.25)",
            textShadowOffset:{height:4,width:4},
            textShadowRadius:0,
            // textShadow:" 0 4 4 rgba(0, 0, 0, 0.25)"
          },
          emailStyle:{
              color:"#323433",
              fontSize:20,
              paddingLeft:50,
              letterSpacing:1,
          },
          roomStyle:{
            color:"#323433",
            fontSize:20,
            paddingLeft:13,
            letterSpacing:1,
          },
          mobileStyle:{
            color:"#323433",
            fontSize:20,
            paddingLeft:37,
            letterSpacing:1,
          }
})

function mapStateToProps(state){
    return{
        id:state.set_user.user.id
    }
}
export default connect(mapStateToProps,null)(Profile);
