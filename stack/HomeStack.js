import React, { Cchildren } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
const Stack = createNativeStackNavigator();

const HomeStack = ({ children }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Restaurants">
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
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
};

export default HomeStack;
