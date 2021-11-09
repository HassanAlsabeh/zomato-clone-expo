import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";


export const loginusers = (email,password,navigation) =>{
  
    return async function (dispatch) {
        try {
         
          const userdata1 = new FormData();
          userdata1.append("email",email);
          userdata1.append("password",password);
         
          const response = await urlAxios.post('/user/login',userdata1);
        
          const userdata = response.data;
     
          if(userdata.success){
            navigation.navigate("Home");
            dispatch({ type: ActionTypes.LOGINUSERS, payload: userdata.data })

          }
        } catch (err) {
          alert("Wrong Email or Password")
          if (err.response) {
            console.log(err.response);
          }
        }
      }
    }