import React from 'react';
import {View,TouchableOpacity,Text,Button,StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { connect } from 'react-redux';


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
                    <TouchableOpacity onPress={this.handleSubmit}>
                        <Text>Upoad a Document</Text>
                    </TouchableOpacity>
                </View>

            )
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
    }
})

export default connect(mapStateToProps,{})(Document)