import React, { Component } from "react";
import { Text, View } from "react-native";
import Kodok from "../component/Kodok";

export class Game extends Component {
  static navigationOptions = {
    title: "Eager Hit The Frog"
  };

  render() {
    return (
      <SafeAreaView
        style={{ ...basicStyle.containerFluid, ...basicStyle.center }}
      >
        <View>
          
        </View>
      </SafeAreaView>
    );
  }
}

export default Game;
