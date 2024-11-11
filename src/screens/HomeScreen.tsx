import React, { useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/store";
import axios from "axios";

import { NavigationProp } from "@react-navigation/native";

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const products = useSelector((state: { products: any[] }) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.example.com/products")
      .then((response) => dispatch(setProducts(response.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button
              title="Details"
              onPress={() =>
                navigation.navigate("Details", { productId: item.id })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});
