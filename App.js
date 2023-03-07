import { StyleSheet, text, View } from "react-native-web";
import Counter from "./src/componets/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
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
