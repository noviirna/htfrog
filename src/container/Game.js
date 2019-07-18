import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Kodok from "../component/Kodok";
import { basicStyle } from "../style/styles";
import { SwitchActions } from "react-navigation";

export class Game extends Component {
  static navigationOptions = {
    title: "Eager Hit The Frog"
  };

  componentDidMount() {}

  onGameEnd() {
    this.props.navigation.dispatch(SwitchActions.jumpTo("Game"));
  }

  render() {
    return (
      <SafeAreaView
        style={{ ...basicStyle.containerFluid, ...basicStyle.center }}
      >
        <View style={basicStyle.col}>
          <View style={basicStyle.row}>
            <Kodok />
          </View>
          <View style={basicStyle.row}>
            <Kodok />
            <Kodok />
          </View>
          <View style={basicStyle.row}>
            <Kodok />
            <Kodok />
            <Kodok />
          </View>
          <View style={basicStyle.row}>
            <Kodok />
            <Kodok />
          </View>
          <View style={basicStyle.row}>
            <Kodok />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default Game;
