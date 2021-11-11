import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchItems } from "../redux/actions/restaurantActions";
import { getitems } from "../redux/actions/itemsAction";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

// npm i react-native-elements
import { Icon as RNEIcon } from "react-native-elements";

import { useFonts } from "expo-font";
import { useDispatch } from "react-redux";
import ItemCard from "../components/ItemCard";

export default function ResturantItems() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([
    {
      name: "HP 15s Ryzen 5 Quad Core - (8 GB/1 TB HDD/Windows 10 Home) 15s-GR0009AU",
      img: "https://i.imgur.com/FVhuBzL.jpg",
      rating: "4.5",
      ratingCount: "214",
      price: "41,990",
      actualPrice: "44,908",
      discount: "6% off",
      offer: "No cost EMI ₹4,666/month. Standard EMI also available",
      specifications: [
        "8 GB/1 TB HDD",
        "Windows 10 Home",
        "15.6 inch Full HD",
        "Thin and Light Laptop",
      ],
    },
  ]);
  useEffect(() => {
    dispatch(getitems());
  }, []);

  //   console.log("hi");
  //   console.log("hi");
  //   console.log(items);
  //   const anwar = items.restaurant_category.map((item) => {
  //     return (
  //       <View
  //         style={{
  //           backgroundColor: "#fff",
  //           marginTop: 10,
  //           borderBottomColor: "#dfe4ea",
  //           borderBottomWidth: 1,
  //           paddingVertical: 10,
  //         }}
  //       >
  //         {/* teeeeeeeeeeeeeeeest */}
  //         <Text
  //           style={{
  //             color: "#111",
  //             marginRight: 8,
  //             fontFamily: "SSBold",
  //             fontSize: 16,
  //           }}
  //         >
  //           {item.name}
  //         </Text>
  //       </View>
  //     );
  //   });
  //   return <>{console.log("hiiiiii", items)}</>;
  return (
    <ScrollView>
      <View>
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
                <ItemCard item={item} category={itemCategory} />
              ))}
            </>
          ))}
      </View>
    </ScrollView>
  );
}
