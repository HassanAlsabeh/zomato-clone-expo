
import React from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import { Circle, AnimatedView } from './styles/animatedHeaderStyle';

const AnimatedHeader = ({ header, headerMainHeight, headerCollapsedHeight, children }) => {
  const { width } = useWindowDimensions();

  let collapsed = header.interpolate({
    inputRange: [0, headerMainHeight - headerCollapsedHeight],
    outputRange: [headerMainHeight, headerCollapsedHeight],
    extrapolate: 'clamp'
  });

  return (
    <AnimatedView style={{ width, height: collapsed, zIndex: 1000 }}>
      {children}
    </AnimatedView>
  );
}

export default AnimatedHeader;
