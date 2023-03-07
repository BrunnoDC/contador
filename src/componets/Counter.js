import { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native-web";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  incrementar() {
    this.setState({ count: this.state.count + 1 });
  }
  decrementar() {
    this.setState({ count: this.state.count - 1 });
  
  }
  render() {
    return (
      <View style={styles.contador}>
        <Text>Contador: {this.state.count}</Text>
        <Button onPress={() => this.incrementar()} title="+" />
        <Button onPress={() => this.decrementar()} title="-" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contador: {
    flexDirection: "row",
    alignItems: "center",
  },
});
