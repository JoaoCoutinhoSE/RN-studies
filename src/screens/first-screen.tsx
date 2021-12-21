import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";

interface BananaProps {
  id: number;
  name: string;
}

export function FirstScreen({ navigation }: any) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>first screen</Text>
      <Button title="navigate" onPress={() => navigation.navigate("Flux")} />
    </View>
  );
}
