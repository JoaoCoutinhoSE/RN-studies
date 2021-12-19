import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function FirstScreen() {
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
    </View>
  );
}
