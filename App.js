import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import HomeStack from './stack/HomeStack';
import store from './redux/store';
import { LogBox } from 'react-native';

// LogBox.ignoreAllLogs();
{/* <Animated.Text style={{ borderWidth: 1, fontSize: 20, width: dimensions.width * 0.38, opacity: heroTitleOpacity }}>lorum impsum from module</Animated.Text> */ }
export default function App() {

  return (
    <Provider store={store}>
      <HomeStack>
        <StatusBar style="auto" translucent={false} />
      </HomeStack>
    </Provider>
  );
}
