import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchItems } from "../redux/actions/restaurantActions";
import { getitems } from "../redux/actions/itemsAction";
import { addtocard } from "../redux/actions/itemsAction";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import {
  StyledContainer,
  CheckoutButton,
  Popuprez,
  ViewCart,
} from "../styledComponent/style";

import { Feather as Icon } from "@expo/vector-icons";

// npm i react-native-elements
import { Icon as RNEIcon } from "react-native-elements";

import { useFonts } from "expo-font";
import { useDispatch } from "react-redux";
import ItemCard from "../components/ItemCard";
import { addCardReducer } from "../redux/reducers/itemReducer";

export default function ResturantItems({ navigation, route }) {
  const userId = useSelector((state) => state.userdata.users);
  console.log("restaurant id", route.params.id);
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const [modelvisible, setModelvisible] = useState(false);
  const [cartvisible, setCartvisible] = useState(false);
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);

  function itemQuantity(e) {
    console.log("qutity", e);
    setQuantity(e);
  }

  function addcard(Itemid) {
    dispatch(addtocard(userId.id, route.params.id, Itemid, quantity));
  }

  function hasan(item) {
    setItem(item);
    setModelvisible(true);
  }
  const checkoutModelContent = (navigation) => {
    return (
      <Popuprez>
        <StyledContainer>
          <View style={{ position: "absolute", left: 0, right: 0 }}>
            <Image
              source={{
                uri: "https://www.nogarlicnoonions.com/images/article_images/2019-01/burger-bros2019-01-10-06-10-35.jpg",
              }}
              style={{
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,

                height: 200,
              }}
            />
          </View>

          {/* <OrderItem /> */}
        </StyledContainer>
        <CheckoutButton
          onPress={() => {
            setModelvisible(false);
            setCartvisible(true);
            addcard(item.id);
            console.log("item model", item.id);
            //navigation.navigate("OrderCompleted");
          }}
        >
          <Text>Add to Cart</Text>
        </CheckoutButton>
      </Popuprez>
    );
  };
  useEffect(() => {
    dispatch(getitems(route.params.id));
  }, []);

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        visible={modelvisible}
        transparent={true}
        onRequestClose={() => setModelvisible(false)}
      >
        <TouchableOpacity
          style={{
            height: 180,
          }}
          onPress={() => setModelvisible(false)}
        ></TouchableOpacity>
        {checkoutModelContent(navigation)}
      </Modal>

      {/* <Modal
        animationType="slide"
        visible={cartvisible}
        transparent={true}
        onRequestClose={() => setCartvisible(false)}
      >
        <Text>etthehhethtrhtrhethetheth</Text>
      </Modal> */}
      <View style={modelvisible ? styles.opacity : styles.container}>
        {items &&
          items.restaurant_category.map((itemCategory) => (
            <>
              <Text
                style={{
                  color: "#111",
                  marginRight: 8,
                  fontFamily: "SSBold",
                  fontSize: 16,
                }}
              >
                {itemCategory.name}
              </Text>
              {itemCategory.items.map((item) => (
                <ItemCard
                  navigation={navigation}
                  item={item}
                  category={itemCategory}
                  hasan={hasan}
                  addcard={addcard}
                  itemQuantity={itemQuantity}
                />
              ))}
            </>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  opacity: {
    opacity: 0.2,
    backgroundColor: "black",
  },
});
