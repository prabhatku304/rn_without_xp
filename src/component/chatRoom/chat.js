import React,{useState,useEffect} from 'react';
import {View,Text,Platform,KeyboardAvoidingView} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat';
import io from 'socket.io-client';
import {connect} from 'react-redux';


let socket;

const ChatRoom =(props)=>{
  
    
    const [messages, setMessages] = useState([]);
    const [newMessage, setNew] = useState(null);
    useEffect(()=>{
   
      //  socket = io("http://7fdd5f24.ngrok.io");
    
      //  let user_id = props.user
      //   let temp = {newMessage,user_id};
      
      //  socket.emit('join',{temp})
      setMessages({
      
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      )
    },[newMessage,messages])
  
    // componentWillMount(){
          
    //     this.setState({
    //         messages:[{
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //               _id: 2,
    //               name: 'React Native',
    //               avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //             },
    //           },]
    //     })
    // }
    const onSend = (message=[])=>{
       console.log(message)
       setNew(message[0]);
       let temp = GiftedChat.append(messages,message);
      
       setMessages(temp) 
       console.log(messages)}

        return(
          <View>
            <Text>Hello</Text>
            <GiftedChat
              messages={messages}
              onSend={(message=>onSend(message))}
              user={{
                _id: 1,
              }}
            />
           {
      Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
   }
            </View>
        )
    
}

function mapStateToProps(state){
  return{
    user:state.set_user.user.id
  }
}

export default connect(mapStateToProps,null)(ChatRoom);