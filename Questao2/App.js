import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSquare}>
        <Text>bloco 1</Text>
      </View>

      <View style={styles.centerSquare}>
        <Text>bloco 2</Text>
      </View>

      <View style={styles.rightSquare}>
        <Text>bloco 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  leftSquare: {
    flex: 1,
    backgroundColor: "red",
    margin: "10px",
  },

  centerSquare: {
    flex: 1,
    backgroundColor: "blue",
    margin: "10px",
  },

  rightSquare: {
    flex: 1,
    backgroundColor: "green",
    margin: "10px",
  },
});
