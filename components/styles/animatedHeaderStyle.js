import styled from 'styled-components';
import { Animated, Dimensions } from 'react-native';

export const Circle = styled.View`

    width: ${Dimensions.get("window").height * 0.2};
    height: ${Dimensions.get("window").height * 0.2};
    background: #ff6b81;
    border-radius: 1000px;
    position: absolute;
    ${({ left, right, bottom, top }) => {
    switch (true) {
      case left && bottom:
        return `left: ${-Dimensions.get('screen').width * 0.1};
                    bottom: ${-Dimensions.get('screen').width * 0.05}`
      case right && top:
        return `right: ${-Dimensions.get('screen').width * 0.1};
                    top: ${-Dimensions.get('screen').width * 0.05}`

    }
  }
  }}
`;

export const AnimatedView = styled(Animated.View)`

   overflow: hidden;
   flex: 1; 
   alignItems: center; 
   justifyContent: center; 
   backgroundColor: #fff; 
   position: absolute; 
   top: 0; 
   left: 0;
`;