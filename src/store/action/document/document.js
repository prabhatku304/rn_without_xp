import Axios from "axios"

export const document = (data)=>{
    return{
        type:"DOCUMENT",
        data
    }
}

export const DocumentAdd = (file)=>{
    return dispatch=>{
    return new Promise((resolve,reject)=>{
         const formData = new FormData();
         formData.append("myImage",file);
         const config = {
             headers:{
                 'content-type' : 'multipart/form-data'
             }
         }
         Axios.post('https://renter-server.herokuapp.com/api/5e0b9eb31a5e3c001779fe77/upload',formData,config)
               .then(res=>{console.log("sucess")
                     dispatch(document(res.data))
                     resolve();
                 })
               .catch(err=>reject(err));  
        })
    }
}