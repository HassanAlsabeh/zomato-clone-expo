import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";
import { AsyncStorage } from "react-native";

const Store = async (value) => {
  try {
    await AsyncStorage.setItem("token", value);
  } catch (error) {
    // Error saving data
  }
};

export const loginusers = (email, password, navigation) => {
  return async function (dispatch) {
    try {
      const userdata1 = new FormData();
      userdata1.append("email", email);
      userdata1.append("password", password);
      const response = await urlAxios.post("/user/login", userdata1);
      const userdata = response.data;
      if (userdata.success) {
        Store(userdata.access_token);
        navigation.navigate("Home");
        dispatch({ type: ActionTypes.LOGINUSERS, payload: userdata.data });
      }
    } catch (err) {
      alert("Wrong Email or Password");
    }
  
  };
  
};
// AsyncStorage.getAllKeys((err, keys) => {
//   AsyncStorage.multiGet(keys, (error, stores) => {
//     stores.map((result, i, store) => {
//       console.log({ [store[i][0]]: store[i][1] });
//       return true;
//     });
//   });
// });


export const registerusers = (name, email, password, navigation) => {
  return async function (dispatch) {
    try {
      const registerdata = new FormData();
      registerdata.append("name", name);
      registerdata.append("email", email);
      registerdata.append("password", password);
      const response = await urlAxios.post("/user/register", registerdata, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const registerData = response.data;
      if (registerData.success) {
        navigation.navigate("Login");
        dispatch({
          type: ActionTypes.REGISTERUSERS,
          payload: registerData.data,
        });
        alert("Successfully Registered");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        alert(err.response.data.errors.email[0]);
      }
    }
  };
};
