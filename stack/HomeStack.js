import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Login from "../pages/login/login";
import OrderCompleted from "../pages/OrderCompleted";
import Popupre from "../pages/Popupre";
import Register from "../pages/register/register";
import Profile from "../pages/profile/profile";
import EditUser from "../pages/profile/updateUserInfo";
const Stack = createNativeStackNavigator();

const HomeStack = ({ children }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Popupre">
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ title: "Login" }, { headerShown: false })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={({ title: "Register" }, { headerShown: false })}
        />
        <Stack.Screen
          options={({ title: "Restaurants" }, { headerShown: false })}
          name="Restaurants"
          component={Home}
        />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ title: "Profile" }, { headerShown: false })}
        />
         <Stack.Screen
          name="EditUser"
          component={EditUser}
          options={({ title: "EditUser" }, { headerShown: false })}
        />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        <Stack.Screen name="Popupre" component={Popupre} />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
};

export default HomeStack;
