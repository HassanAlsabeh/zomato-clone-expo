import React, { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, connect } from "react-redux";
import AnimatedHeader from "../components/animatedHeader";
import RestaurantCard from "../components/restaurantCard";
import { fetchRestaurants } from "../redux/actions/restaurantActions";
import {
  AnimatedText,
  Circle,
} from "../styledComponent/styles/animatedHeaderStyle";

const Home = ({ navigation, route, fetchRestaurants }) => {
  const { width, height } = useWindowDimensions();

  const restaurants = useSelector((state) => state.data.restaurants);
  // const restaurants = ['Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4'];

  let header = useRef(new Animated.Value(0)).current;
  const HEADER_MAIN_HEIGHT = 150;
  const HEADER_COLLAPSED_HEIGHT = 50;
  const BIG_IMG =
    "https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/5:4/w_2810,h_2248,c_limit/Alo-Restaurant__2018_Raffi-Photo-2.jpg";

  const headerTitleOpacity = header.interpolate({
    inputRange: [0, HEADER_MAIN_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const heroTitleOpacity = header.interpolate({
    inputRange: [0, HEADER_MAIN_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const bottomPositionIcon = header.interpolate({
    inputRange: [0, HEADER_MAIN_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [5, HEADER_MAIN_HEIGHT - 60],
    extrapolate: "clamp",
  });

  const topPositionIcon = header.interpolate({
    inputRange: [0, HEADER_MAIN_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_MAIN_HEIGHT - 60 , 5],
    extrapolate: "clamp",
  });

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      <AnimatedHeader
        header={header}
        headerMainHeight={HEADER_MAIN_HEIGHT}
        headerCollapsedHeight={HEADER_COLLAPSED_HEIGHT}
      >
        <Circle style={{ transform: [{ rotate: "180deg" }] }} right top />
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            top: 10,
            right: 10,
            borderRadius: 50,
            backgroundColor: "white",
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
        <Circle left bottom />
        <Animated.View
          style={{
            width: 40,
            height: 40,
            position: "absolute",
            bottom:bottomPositionIcon,
            top: topPositionIcon,
            left: 10,
            zIndex:2000
          }}
        >
          <Ionicons
            name="cart"
            size={40}
            color="white"
            onPress={() => navigation.navigate("CartItems")}
          />
        </Animated.View>
        <View>
          <Ionicons />
        </View>

        <Animated.View style={{ width:150,height:120 ,opacity: heroTitleOpacity }}>
         <Image style={{width:"100%",height:"100%"}} source={require('./register/yummy.png')}/>
        </Animated.View>

        <AnimatedText center style={{ opacity: headerTitleOpacity }}>
          {route.name}
        </AnimatedText>
      </AnimatedHeader>

      <SafeAreaView style={{ height }}>
        {console.log("restaurants", restaurants)}
        {/* <ImageBackground
          source={{ uri: BIG_IMG }}
          style={StyleSheet.absoluteFill}
          blurRadius={5}
        /> */}
        <Animated.FlatList
          data={restaurants}
          renderItem={({ item, index }) => (
            <RestaurantCard
              onPress={() => navigation.navigate("Popupre", { id: 1 })}
              data={item}
            />
          )}
          extraData={restaurants}
          contentContainerStyle={{ paddingTop: HEADER_MAIN_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: header } } }],
            { useNativeDriver: false }
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default connect(null, { fetchRestaurants })(Home);
