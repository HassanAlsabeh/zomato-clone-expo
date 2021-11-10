import React from 'react';
import Text from './styles/text';
import Container from './styles/container';
import ImageBackground from './styles/imageBackground';
import { URL } from '../apis/config';
import { View } from 'react-native';


const RestaurantCard = ({ data, onPress }) => {

  console.log("data restaurant info", data.restaurant_info)

  let image = null;

  if (data.restaurant_info) {
    image = {
      uri: URL + data.restaurant_info.logo
    };
  }


  return (

    <Container
      onPress={onPress}
      borderRadius
      alignCont={'center'}
      justCont={'center'}
      contPadding={0}
      contMarg={'16px auto 0 auto'}
      bgColor={'#e8a0a0'}
    >
      {<ImageBackground source={data.restaurant_info && data.restaurant_info.logo ? image : { uri: 'https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-restaurant.png' }}>
        <Container
          onPress={onPress}
          alignCont={'flex-start'}
          justCont={'flex-end'}
          contPadding={'10px'}
          contMarg={0}
        >

          <Text
            pdMD
            bgColor={'#e8a0a0'}
            fontWeight={"100"}
            fontSize={"18px"}
            textColor={'#fff'}
            text={data.name}
          />
          {console.log("restaurant info", data && data.restaurant_info)}
          <Text
            pdMDLeft
            pdLGBottom
            bgColor={'#e8a0a0'}
            fontWeight={"100"}
            fontSize={"10px"}
            textColor={'#fff'}
            text={data.restaurant_info && data.restaurant_info.description}
          />
        </Container>
      </ImageBackground>}
    </Container>

  );
}

export default RestaurantCard;