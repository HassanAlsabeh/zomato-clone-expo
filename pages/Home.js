import React, { useEffect, useRef } from 'react';
import { Animated, FlatList, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector, connect } from 'react-redux';
import AnimatedHeader from '../components/animatedHeader';
import RestaurantCard from '../components/restaurantCard';
import { fetchRestaurants } from '../redux/actions/restaurantActions';

const Home = ({ navigation, fetchRestaurants }) => {


  // const restaurants = useSelector((state) => state.data.restaurants);
  const restaurants = ['Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4', 'Item 1', 'item 2', 'item 3', 'item 4'];

  let header = useRef(new Animated.Value(0)).current;
  const HEADER_MAIN_HEIGHT = 150;
  const HEADER_COLLAPSED_HEIGHT = 50;

  useEffect(() => {
    fetchRestaurants();
  }, [])

  return (
    <>

      <AnimatedHeader
        header={header}
        headerMainHeight={HEADER_MAIN_HEIGHT}
        headerCollapsedHeight={HEADER_COLLAPSED_HEIGHT}
      />

      <SafeAreaView >
        {console.log('restaurants', restaurants)}
        <Animated.FlatList
          data={restaurants}
          renderItem={({ item }) => (
            // <RestaurantCard
            //   onPress={() => navigation.navigate("Item")}
            //   data={item}
            // />
            <Text>{item}</Text>
          )}
          extraData={restaurants}
          contentContainerStyle={{ paddingTop: HEADER_MAIN_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: header } } }])}
        />
      </SafeAreaView>
    </>
  );
}

export default connect(null, { fetchRestaurants })(Home);