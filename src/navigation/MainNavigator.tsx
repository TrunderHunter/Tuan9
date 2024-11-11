import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import AddProductScreen from "../screens/AddProductScreen";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Add Product" component={AddProductScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
