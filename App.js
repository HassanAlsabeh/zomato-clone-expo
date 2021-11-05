import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./pages/login/login";

// import Dashboard from "./Components/Dashboard/Dashboard";
// import Kpi_Ratings from "./Components/pages/Kpi_Ratings";
// import SwipeList from "./Components/pages/SwipeList";
// import kpi_list from "./Components/pages/kpi_list";
// import Graph from "./Components/Graph/Graph";
// import Profile from "./Components/Profile/Profile";
// import Reports from "./Components/pages/Reports";

const Draw = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const EmployeeStack = () => (
  <Stack.Navigator
    initialRouteName="SwipeList"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="SwipeList" component={SwipeList} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="kpi_list" component={kpi_list} />
    <Stack.Screen name="Graph" component={Graph} />
  </Stack.Navigator>
);

function MyDraw() {
  return (
    <Tab.Navigator
      initialRouteName="Logout"
      screenOptions={{
        headerTitleAlign: "center",

        headerStyle: {
          backgroundColor: "rgb(0, 203, 255)",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // headerShown: false,
      }}
    >
      {/* <Draw.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ title: "Dashboard" }, { headerShown: true })}
      />

      <Draw.Screen
        name="Employees"
        component={EmployeeStack}
        options={({ title: "Employees" }, { headerShown: true })}
      />

      <Draw.Screen
        name="Kpi_Ratings"
        component={Kpi_Ratings}
        options={({ title: "Kpi_Ratings" }, { headerShown: true })}
      />

      <Draw.Screen
        name="Reports"
        component={Reports}
        options={({ title: "Reports" }, { headerShown: true })}
      /> */}

      <Draw.Screen
        name="Logout"
        component={Login}
        options={({ title: "Logout" }, { swipeEnabled: false })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDraw />
    </NavigationContainer>
  );
}
