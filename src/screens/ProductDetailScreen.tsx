import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../store/store";
import axios from "axios";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  ProductDetail: { productId: string };
};

type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetail"
>;
type ProductDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>;

export default function ProductDetailScreen({
  route,
  navigation,
}: {
  route: ProductDetailScreenRouteProp;
  navigation: ProductDetailScreenNavigationProp;
}) {
  const { productId } = route.params;
  const product = useSelector((state: any) =>
    state.products.find((p) => p.id === productId)
  );
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios
      .delete(`https://api.example.com/products/${productId}`)
      .then(() => {
        dispatch(deleteProduct(productId));
        navigation.goBack();
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text>Name: {product?.name}</Text>
      <Text>Price: {product?.price}</Text>
      <Button title="Delete Product" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
