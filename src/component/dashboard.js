import React,{Component} from 'react';
import {View,Button,Text,StyleSheet,FlatList} from 'react-native';
import Axios from 'axios';
import {connect} from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../container/button';


class Dashboard extends Component{
    constructor(props){
        super(props);
      this.state={
        info:[],
        isFetch:true
      }
      this.fetchHistory = this.fetchHistory.bind(this);
      this.info=[{
        title:"rent",
        id:1
      },
      {
        title:"hloo",
        id:2
      }]
    }

    componentDidMount(){
        this.fetchHistory();

    }



    fetchHistory(){
      Axios.get(`https://renter-server.herokuapp.com/api/${this.props.id}/rent/history`)
      .then(res=>{this.setState({info:res.data.History,isFetch:true})
           console.log(this.state.info[0])

         })
      .catch(err=>console.log(err))
    }


    render(){



        return(
            <View style={styles.container}>
              {this.state.isFetch===false ? (<Text>Loading .....</Text>) :(
                  <FlatList

                  data={this.info}
                  renderItem={({item})=><Itemdata title={item}/>}
                  numColumns={1}
                 keyExtractor={(item, index) => index.toString()}
                  />
              )}

            </View>
        )
    }
}

Dashboard.navigationOptions = (propType)=>{
   return{
     headerTitle:"Dashboard",
     headerLeft:<HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item title="bar" size={25} iconName="ios-menu" onPress={()=>{propType.navigation.toggleDrawer()}} />
                </HeaderButtons>
   }
}

const styles = StyleSheet.create({
        container:{
            paddingTop:20,
            flex:1,
          display:"flex",
          justifyContent:"space-around",
          alignItems:"center"

        },
        month:{
            display:"flex",
            padding:30,
            width:300,
            height:200,
            margin:10,
            borderRadius:10,
            shadowOffset: { width: 20, height: 20 },
            shadowColor: '#fff',
            shadowOpacity: 1,
            elevation: 10,
            backgroundColor : "#ffff"


        }
})

function Itemdata({title}){
  console.log(title)
     return (
         <View style={styles.month}>
          <Text >{title.title}</Text>
          </View>
      )
  }

  function mapStateToProps(state){
    return{
      id:state.set_user.user.id
    }
  }

export default connect(mapStateToProps,null)(Dashboard);
