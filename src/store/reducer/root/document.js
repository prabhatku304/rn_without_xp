
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
                default : state;
           }
}