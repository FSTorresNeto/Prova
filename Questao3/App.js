import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [textInput, setTextInput] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Digite algo</Text>

      <TextInput
        onChangeText={(newText) => setTextInput(newText)}
        placeholder={"Digite aqui"}
        value={textInput}
      />

      <Text>Digitou = {textInput} </Text>
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
