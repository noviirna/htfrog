import React, { Component } from "react";
import { Text, View, SafeAreaView, Button } from "react-native";
import { basicStyle } from "../style/styles";
import { p001, color, fontsSize } from "../style/base";
export class Landing extends Component {
  static navigationOptions = {
    title: "Eager Hit The Frog"
  };

  render() {
    return (
      <SafeAreaView
        style={{ ...basicStyle.containerFluid, ...basicStyle.center }}
      >
        <View>
          <Text>Eager Hit That Frog</Text>
          <Button style={styles.button}>Play the game</Button>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    padding: p001[2],
    color: color.blue,
    width: 30,
    height: 40,
    fontSize: fontsSize.p
  }
});

export default Landing;
