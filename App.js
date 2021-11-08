import * as React from "react";
import { Provider } from "react-redux";
import HomeStack from "./stack/HomeStack";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <HomeStack />
    </Provider>
  );
}
