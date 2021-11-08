
import React from 'react';
import { Animated, useWindowDimensions } from 'react-native';

const AnimatedHeader = ({ header, headerMainHeight, headerCollapsedHeight }) => {
  const dimensions = useWindowDimensions();

  let collapsed = header.interpolate({
    inputRange: [0, headerMainHeight - headerCollapsedHeight],
    outputRange: [headerMainHeight, headerCollapsedHeight],
    extrapolate: 'clamp'
  });


  const headerTitleOpacity = header.interpolate({
    inputRange: [0, headerMainHeight - headerCollapsedHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });


  const heroTitleOpacity = header.interpolate({
    inputRange: [0, headerMainHeight - headerCollapsedHeight],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", position: "absolute", top: 0, left: 0, width: dimensions.width, height: collapsed, zIndex: 1000 }}>

      <Animated.Text style={{ textAlign: 'center', alignSelf: 'center', justifyContent: 'center', opacity: headerTitleOpacity }}>hello everyomne</Animated.Text>
      <Animated.Text style={{ position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity }}>lorum impsum from module</Animated.Text>

    </Animated.View>
  );
}

export default AnimatedHeader;