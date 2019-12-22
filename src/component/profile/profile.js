import React ,{Component} from 'react';
import {View,Button,Image,Text,StyleSheet} from 'react-native';
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
        Axios.get(`https://renter-server.herokuapp.com/api/user/${this.props.id}`)
             .then(res=>this.setState({user:res.data}))
             .catch(err=>console.log(err))
    }
    render(){
        let user = this.state.user
        
        return(
            <View style={styles.container}>
                <Image source={{uri:"https://owips.com/sites/default/files/clipart/profile-clipart/230017/profile-clipart-dummy-230017-3860031.png"}} style={styles.profileImage}/>
                <View style={styles.profileStyle}>
                <Text style={styles.usernameStyle}>Username : {user.username}</Text>
                <Text style={styles.emailStyle}>Email : {user.email}</Text>
                <Text style={styles.roomStyle}>Room no. : 8</Text>
                <Text style={styles.mobileStyle}>mobile : </Text>
                </View>
            </View>
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
              height:200,
              width:200,
              alignSelf:"center"

          },usernameStyle:{
              color:"blue",
              fontSize:20,
              paddingLeft:10,
              letterSpacing:1
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
