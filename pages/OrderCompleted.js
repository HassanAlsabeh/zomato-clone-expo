import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedLottieView from "lottie-react-native";
export default function OrderCompleted() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          margin: 20,
          alignItems: "center",
          justifyContent:"space-between"
        }}
      >
        <AnimatedLottieView
          style={{ height: 100, alignSelf: "center" }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          loop={false}
        />
        <Text>Order Completed</Text>
        <AnimatedLottieView
          style={{ height: 100, alignSelf: "center" }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          loop={false}
        />
      </View>
    </SafeAreaView>
  );
}
