import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title, navigation }) => {
  return (
    <SafeAreaView style={{ flexDirection: 'row' }}>

      <TouchableOpacity style={{ justifyContent: "center", padding: 5 }} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 15, padding: 5 }}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
      </View>
    </SafeAreaView>);
}

export default Header;