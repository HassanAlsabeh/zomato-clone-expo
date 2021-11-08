import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


const TextStyle = styled.Text`

  width: 100%;
  font-size: ${props => props.fontSize};
  color:${props => props.textColor};
  font-weight:${props => props.fontWeight};
    ${props => {
    if (props.bgColor) {
      return `background: ${props.bgColor};`
    }
  }}
  padding:10px;

`;

const Text = ({ text, bgColor, textColor, fontSize, fontWeight }) => {
  return (
    <TextStyle bgColor={bgColor} fontWeight={fontWeight} textColor={textColor} fontSize={fontSize}>{text}</TextStyle>
  );
}

export default Text;