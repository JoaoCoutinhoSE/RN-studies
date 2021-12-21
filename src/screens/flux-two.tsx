import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export function FluxTwo({ navigation }: any) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View>
      <Text>Flux Two</Text>
      <Button
        title="navigate"
        onPress={() => navigation.navigate("Second screen")}
      />
    </View>
  );
}
