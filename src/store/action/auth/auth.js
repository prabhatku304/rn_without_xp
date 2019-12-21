import {SETUSER} from '../../actionTypes'
import {AsyncStorage} from 'react-native'


export const newUser = (data)=>{
    return{
          type:SETUSER,
          data
    }
}

export const addUser = (data,types)=>{

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
        dispatch(newUser({}));
        AsyncStorage.clear();
    }
}