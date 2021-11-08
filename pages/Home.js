import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, connect } from 'react-redux';
import AnimatedHeader from '../components/animatedHeader';
import RestaurantCard from '../components/restaurantCard';
import { fetchRestaurants } from '../redux/actions/restaurantActions';
import { Circle } from '../components/styles/animatedHeaderStyle';

const Home = ({ navigation, route, fetchRestaurants }) => {

  const { width, height } = useWindowDimensions();

  const restaurants = useSelector((state) => state.data.restaurants);
  // const restaurants = ['Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4'];

  let header = useRef(new Animated.Value(0)).current;
  const HEADER_MAIN_HEIGHT = 150;
  const HEADER_COLLAPSED_HEIGHT = 50;
  const BIG_IMG = "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb";

  const headerTitleOpacity = header.interpolate({
    inputRange: [0, HEADER_MAIN_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });


  const heroTitleOpacity = header.interpolate({
    inputRange: [0, HEADER_MAIN_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  useEffect(() => {
    fetchRestaurants();
  }, [])

  return (
    <>
      <AnimatedHeader
        header={header}
        headerMainHeight={HEADER_MAIN_HEIGHT}
        headerCollapsedHeight={HEADER_COLLAPSED_HEIGHT}
      >

        <Circle right top />
        <Circle left bottom />

        <Animated.Text style={{ position: "absolute", fontSize: 20, width: width * 0.35, opacity: heroTitleOpacity }}>lorum impsum from module</Animated.Text>

        <Animated.Text style={{ textAlign: 'center', opacity: headerTitleOpacity }}>{route.name}</Animated.Text>

      </AnimatedHeader>


      <SafeAreaView style={{ height }}>
        {console.log('restaurants', restaurants)}
        <ImageBackground source={{ uri: BIG_IMG }} style={StyleSheet.absoluteFill} blurRadius={80} />
        <Animated.FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <RestaurantCard
              onPress={() => navigation.navigate("Item")}
              data={item}
            />
            // <View style={{ backgroundColor: "#fff", margin: 10, padding: 5, borderRadius: 5 }}>
            //   <Text style={{ textAlign: "center" }} >{item}</Text>
            // </View>
          )}
          extraData={restaurants}
          contentContainerStyle={{ paddingTop: HEADER_MAIN_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: header } } }], { useNativeDriver: false })}
        />
      </SafeAreaView>
    </>
  );
}

export default connect(null, { fetchRestaurants })(Home);