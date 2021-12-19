import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function SecondScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Text>second screen</Text>
    </View>
  );
}
