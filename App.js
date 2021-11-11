import React from "react";
import { Provider } from "react-redux";
import HomeStack from "./stack/HomeStack";
import store from "./redux/store";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

// LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <HomeStack>
        <StatusBar style="light" translucent={false} />
      </HomeStack>
    </Provider>
  );
}
