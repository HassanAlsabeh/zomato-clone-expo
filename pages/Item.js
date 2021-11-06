import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Item = () => {
  return (
    <View style={styles.container}>
      <Text>Item Screen</Text>
    </View>);
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});