import React, { useState } from "react";
import { updateUserInfo } from "../../redux/actions/userInfoActions";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../apis/config";
export default function UpdateUserInfo({ navigation }) {
  const users = useSelector((state) => state.userdata.users);
  const dispatch = useDispatch();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [phone, setPhone] = useState();
  console.log("addressss", address1);
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Image
          style={styles.avatar}
          source={{
            uri: `${URL}${users.user_info.photo}`,
          }}
        />
      </View>

      {/* <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        value={users.name}
        placeholderTextColor="#DF0038"
        autoCapitalize="none"
        //    onChangeText = {this.handleEmail}
      /> */}
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={users.user_info.address1}
        placeholderTextColor="#DF0038"
        autoCapitalize="none"
        onChangeText={(address1) => setAddress1(address1)}
        //    onChangeText = {this.handleEmail}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={users.user_info.address2}
        placeholderTextColor="#DF0038"
        autoCapitalize="none"
        onChangeText={(address2) => setAddress2(address2)}
        //    onChangeText = {this.handleEmail}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={users.user_info.phone}
        placeholderTextColor="#DF0038"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={(phone) => setPhone(phone)}
        //    onChangeText = {this.handlePassword}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>
          dispatch(updateUserInfo(address1, address2, phone, navigation))
        }
      >
        <Text style={styles.submitButtonText}> Edit </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    paddingTop: 29,
    backgroundColor: "#c9c9c9",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    marginLeft: 150,
    width: 160,
    height: 160,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 10,
    marginLeft: 15,
  },
  input: {
    margin: 18,
    height: 40,
    borderColor: "#DF0038",
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "#DF0038",
    padding: 10,
    margin: 15,
    height: 50,
    borderRadius: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
});
