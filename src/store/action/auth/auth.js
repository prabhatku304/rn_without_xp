import {SETUSER} from '../../actionTypes'
import {AsyncStorage} from 'react-native';
import axios from 'axios'


export const newUser = (data)=>{
    return{
          type:SETUSER,
          data
    }
}

export const addUser = (data,types)=>{
     console.log(data)
       return dispatch =>{
           return new Promise((resolve,reject)=>{
               axios.post(`https://renter-server.herokuapp.com/api/${types}`,data)
                    .then(({token,...user})=>{
                        AsyncStorage.setItem('jwtToken',JSON.stringify(token))
                        dispatch(newUser(user))
                        resolve();
                    }).catch(err=>reject(err))
           })
       }
}

export const logout = ()=>{
    return dispatch =>{
        return new Promise((resolve,reject)=>{
            dispatch(newUser({}));
            AsyncStorage.removeItem('jwtToken',()=>{console.log("Deleted")});
              resolve();
        })
        
    }
}