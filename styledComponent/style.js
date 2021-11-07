import styled from "styled-components/native";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Constants } from "expo-constants";

// const StatusBarHeight = Constants.StatusBarHeight;

// export const Colors = {
//   primary: "#ffffff",
//   secondary: "#E5E7EB",
//   tertiary: "#1F2937",
//   darkLight: "#9CA3AF",
//   brand: "#10B981",
//   red: "#EF4444",
//   cyan: "#1DC4E7",
// };

// const { primary, secondary, tertiary, darkLight, brand, red, cyan } = Colors;

export const StyledContainer = styled.View`
  width: 100%;
  height: 80%;
  background-color: #bed1c3;
  padding: 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: absolute;
  bottom: 0;
`;

export const CheckoutButton = styled.TouchableOpacity`
    position: absolute;
    bottom:40px;
    background-color: red;
    padding: 10px 25px 10px 25px;
    border-radius: 5px;
`;
