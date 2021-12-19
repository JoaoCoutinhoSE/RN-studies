import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FirstScreen, SecondScreen } from "../screens";

const { Screen, Navigator } = createBottomTabNavigator();

export function Routes() {
  return (
    <Navigator>
      <Screen
        name="First screen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Second screen"
        component={SecondScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
