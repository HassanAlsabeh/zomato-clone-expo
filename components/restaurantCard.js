import React from 'react';
import Text from './styles/text';
import Container from './styles/container';
import ImageBackground from './styles/imageBackground';
import { URL } from '../apis/config';


const RestaurantCard = ({ data, onPress }) => {
  console.log("data name", data.name)

  const image = {
    uri: URL + data.restaurant_info.logo
  };

  return (

    <Container
      onPress={onPress}
      alignCont={'center'}
      justCont={'center'}
      contPadding={0}
      contMarg={'16px auto 0 auto'}
      bgColor={'#7B7B7B'}
    >
      {data.restaurant_info && <ImageBackground source={image}>
        <Container
          onPress={onPress}
          alignCont={'flex-start'}
          justCont={'flex-end'}
          contPadding={'10px'}
          contMarg={0}
        >
          <Text bgColor={'#fff'} fontWeight={"100"} fontSize={"18px"} textColor={'#3d3d3d'} text={data.name} />

        </Container>
      </ImageBackground>}
    </Container>

  );
}

export default RestaurantCard;