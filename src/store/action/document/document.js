import { promises } from "dns"
import Axios from "axios"


export const DocumentAdd = (file)=>{
    return new promises((resolve,reject)=>{
         const formData = new FormData();
         formData.append("myImage",file);
         const config = {
             headers:{
                 'content-type' : 'multipart/form-data'
             }
         }
         Axios.post('https://renter-server.herokuapp.com/api/5e1339c61f97910017986b5a',formData,config)
               .then(res=>{console.log("sucess")
                     resolve();
                 })
               .catch(err=>reject(err));  
        })
}