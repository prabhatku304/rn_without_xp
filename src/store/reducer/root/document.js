
const D_Document={
    document:{}
}




export const documentReducer = (state={D_Document},action)=>{
           switch(action.type){
               case "DOCUMENT" :
                    return{
                        ...state,
                        document:action.data
                    }
                default :return state;               // must be return state otherwise it will error
           }
}