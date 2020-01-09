import React from 'react';
import {View,TouchableOpacity,Text,Button,StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { connect } from 'react-redux';
import {DocumentAdd} from '../../store/action/document/document'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import Header from '../../container/button'
import DocumentModal from './modal';

class Document extends React.Component{
        constructor(props){
            super(props);
            this.state={
                modal:false,
                url:{}
            }
         this.handleModal = this.handleModal.bind(this);
        }

       async handleModal(){
           console.log("hello")
           try{
                let response = await DocumentPicker.pick({
                    type:[DocumentPicker.types.images]
                })
                console.log(response)
                this.setState({modal:true,url:response})
           }catch(err){
               if(DocumentPicker.isCancel(err)){

               }else{
                   console.log(err)
               }
           }

        }
        handleSubmit = ()=>{ 
                this.props.DocumentAdd(this.state.url)
                .then(res=>alert("hello"))
                .catch(err=>alert(err))
        }

        render(){
            return(
                <View style={styles.container}>
                    
                    {this.state.modal ? (<DocumentModal url={this.state.url} handleSubmit ={this.handleSubmit}/>) :(
                    <TouchableOpacity onPress={this.handleModal} style={styles.upload}>
                        <Text style={styles.upload_text}>Upoad a Document</Text>
                    </TouchableOpacity>)}
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
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
        height:30,
        width:180,
        alignItems:"center"
    },
    upload_text:{
        padding:4,
        letterSpacing:1,
    }
})

export default connect(mapStateToProps,{DocumentAdd})(Document)