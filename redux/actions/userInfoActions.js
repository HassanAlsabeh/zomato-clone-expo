import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const updateUserInfo = (address1, address2, phone, navigation) => {
  console.log("ya hawa", address1);
  return async function (dispatch) {
    try {
      const updateduserinfo1 = new FormData();
      updateduserinfo1.append("address1", address1);
      updateduserinfo1.append("address2", address2);
      updateduserinfo1.append("phone", phone);
      const response = await urlAxios.post(
        `/update_userinfo/11?_method=put`,
        updateduserinfo1,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const updateduserInfo = response.data;
      if (updateduserInfo.success) {
        navigation.navigate("Profile");
        console.log("ewwww", updateduserInfo);
        dispatch({
          type: ActionTypes.UPDATE_USERINFO,
          payload: updateduserInfo.data,
        });
        alert("Successfully Updated");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
    }
  };
};
