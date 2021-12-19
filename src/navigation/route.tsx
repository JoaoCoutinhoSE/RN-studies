import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FirstScreen, SecondScreen } from "../screens";

const { Screen, Navigator } = createBottomTabNavigator();

export function Routes() {
  return (
    <Navigator>
      <Screen name="Tela um" component={FirstScreen} />
      <Screen name="Tela dois" component={SecondScreen} />
    </Navigator>
  );
}
