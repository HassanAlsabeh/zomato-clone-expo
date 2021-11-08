import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../redux/actions/restaurantActions';

const Home = ({ navigation }) => {

  const restaurants = useSelector((state) => state.data.restaurants);

  const dispatch = useDispatch(); 

  console.log('home restaurant data', restaurants);

  useEffect(() => dispatch(fetchRestaurants()), [])

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Item")}
            style={styles.container}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        key={(item) => item.id}
      />
    </View>);
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});