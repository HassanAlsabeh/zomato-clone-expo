import React, { useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
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

        <AnimatedText style={{ opacity: heroTitleOpacity }}>
          lorum impsum from module
        </AnimatedText>

        <AnimatedText center style={{ opacity: headerTitleOpacity }}>
          {route.name}
        </AnimatedText>
      </AnimatedHeader>

      <SafeAreaView style={{ height }}>
        {console.log("restaurants", restaurants)}
        <ImageBackground
          source={{ uri: BIG_IMG }}
          style={StyleSheet.absoluteFill}
          blurRadius={5}
        />
        <Animated.FlatList
          data={restaurants}
          renderItem={({ item, index }) => (
            <RestaurantCard
              onPress={() => navigation.navigate("Item", { id: item.id })}
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
