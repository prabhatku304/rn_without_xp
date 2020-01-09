import React from 'react';
import {View,TouchableOpacity,Text,Button,StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { connect } from 'react-redux';
import {DocumentAdd} from '../../store/action/document/document'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import Header from '../../container/button'

class Document extends React.Component{
        constructor(props){
            super(props);
         this.handleSubmit = this.handleSubmit.bind(this);
        }

       async handleSubmit(){
           console.log("hello")
           try{
                let response = await DocumentPicker.pick({
                    type:[DocumentPicker.types.images]
                })
                console.log(response)
                this.props.DocumentAdd(response)
                   .then(res=>alert("hello"))
                   .catch(err=>alert(err))
           }catch(err){
               if(DocumentPicker.isCancel(err)){

               }else{
                   console.log(err)
               }
           }

        }

        render(){
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.handleSubmit} style={styles.upload}>
                        <Text style={styles.upload_text}>Upoad a Document</Text>
                    </TouchableOpacity>
                </View>

            )
        }
}

Document.navigationOptions = (navProps)=>{
    return{
        headerTitle:"Document",
        headerLeft: <HeaderButtons HeaderButtonComponent={Header}>
             <Item title="bar" iconName="ios-menu" onPress={()=>navProps.navigation.toggleDrawer()} />
        </HeaderButtons>

    }
}

function mapStateToProps(state){
    return{
        id:state.set_user.user.id
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-around"
    },
    upload:{

    },
    upload_text:{
        letterSpacing:1,
    }
})

export default connect(mapStateToProps,{DocumentAdd})(Document)