import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Icon as RNEIcon } from "react-native-elements";
export default function ItemCard(props) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginTop: 10,
        borderBottomColor: "#dfe4ea",
        borderBottomWidth: 1,
        paddingVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {/* Product Image View */}
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <Image
            style={{ width: 100, height: 100, resizeMode: "center" }}
            source={{
              uri: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            }}
          />
        </View>
        {/* Product Details View */}
        <View style={{ flex: 3 }}>
          {/* -- Ratings View */}
          <View>
            <Text style={{ fontFamily: "SSRegular" }}>{props.item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#fff200",
                  alignItems: "center",
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 4,
                  marginTop: 4,
                }}
              >
                <Text
                  style={{
                    color: "#111",
                    marginRight: 8,
                    fontFamily: "SSBold",
                    fontSize: 16,
                  }}
                >
                  {props.category.name}
                </Text>
                <RNEIcon
                  name="star"
                  type="font-awesome"
                  size={12}
                  color={"#111"}
                />
              </View>
            </View>
          </View>
          {/* -- Price View */}
        </View>
      </View>
      {/* Offer View */}
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <RNEIcon name="tag" type="font-awesome" size={16} />
        <Text style={{ marginLeft: 10, fontSize: 16, fontFamily: "SSRegular" }}>
          {props.item.price + " LBP"}
        </Text>
      </View>
      {/* Specifications Wrap */}
      <View
        style={{
          marginTop: 4,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 4,
            marginBottom: 4,
            marginLeft: 4,
            marginRight: 4,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#f2f2f2",
            alignSelf: "baseline",
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 4,
          }}
        >
          {props.item.description}
        </Text>
      </View>
    </View>
  );
}
