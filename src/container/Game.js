import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Kodok from "../component/Kodok";
import { basicStyle } from "../style/styles";
import { SwitchActions } from "react-navigation";
import { Resolution } from "../style/base";

export class Game extends Component {
  static navigationOptions = {
    title: "Eager Hit The Frog"
  };

  componentDidMount() {}

  onGameEnd() {
    this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName: "End" }));
  }

  render() {
    return (
      <SafeAreaView
        style={{
          ...basicStyle.containerFluid,
          ...basicStyle.center
        }}
      >
        <View
          style={{
            ...basicStyle.col,
            alignItems: "center",
            justifyContent: "center",
            width: Resolution.fullWidth
          }}
        >
          <View style={basicStyle.row}>
            <Kodok />
          </View>
          <View style={{ ...basicStyle.row, justifyContent: "space-around" }}>
            <Kodok />
            <Kodok />
          </View>
          <View style={{ ...basicStyle.row, justifyContent: "space-between" }}>
            <Kodok />
            <Kodok />
            <Kodok />
          </View>
          <View style={{ ...basicStyle.row, justifyContent: "space-around" }}>
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
