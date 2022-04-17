import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const AddCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {count <= 1 ? (
        <Text>Vc apretou {count} vez </Text>
      ) : (
        <Text>Vc apretou {count} vezes </Text>
      )}
      <Button onPress={AddCount} title="Clique" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
