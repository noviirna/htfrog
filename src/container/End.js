import React, { Component } from "react";
import { Text, View } from "react-native";
import { basicStyle } from "../style/styles";
import { p001, color, fontsSize } from "../style/base";

export class End extends Component {
  static navigationOptions = {
    title: "Eager Hit The Frog"
  };

  render() {
    return (
      <SafeAreaView
        style={{ ...basicStyle.containerFluid, ...basicStyle.center }}
      >
        <View>
          <Text>End of Game</Text>
          <Button style={styles.button}>Play Again</Button>
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

export default End;
