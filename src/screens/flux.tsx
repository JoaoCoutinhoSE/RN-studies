import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { FluxTwo } from "./flux-two";
import { FluxThree } from "./flux-three";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function ScreenRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"FluxTwo"} component={FluxTwo} />
      <Tab.Screen name={"FluxThree"} component={FluxThree} />
    </Tab.Navigator>
  );
}

export function Flux({ navigation }: any) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <>
      <ScreenRoutes />
    </>
  );
}
