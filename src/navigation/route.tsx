import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FirstScreen, SecondScreen } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { Flux } from "../screens/flux";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="First screen"
          component={Flux}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Second screen"
          component={SecondScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
