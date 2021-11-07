import React, { Cchildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Item from '../pages/Item';
import Login from '../pages/login/login';
import OrderCompleted from '../pages/OrderCompleted';

import Popupre from '../pages/Popupre';


const Stack = createNativeStackNavigator();

const HomeStack = ({ children }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Popupre">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        <Stack.Screen name="Popupre" component={Popupre} />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
}

export default HomeStack;