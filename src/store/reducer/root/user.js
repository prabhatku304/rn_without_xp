import {SETUSER} from '../../actionTypes'

const DEFAULT_USER = {
    isAuthenticated:false,
    user:{}
}


const userReducer = (state=DEFAULT_USER,action)=>{
     
      switch(action.type){
          case SETUSER :
               return{
                   ...state,
                   isAuthenticated: !!Object.keys(action.data).length,
                   user:action.data
               }
         default :
          return state
      }
}

export default userReducer