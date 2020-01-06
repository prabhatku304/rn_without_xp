import React from 'react';
import {View,TouchableOpacity,Text,Button,StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker';


class Document extends React.Component{
        constructor(props){
            super(props);

        }

       async handleSubmit(){
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
                <View>
                    <TouchableOpacity onPress={this.handleSubmit}>
                        <Text>Upoad a Document</Text>
                    </TouchableOpacity>
                </View>

            )
        }
}