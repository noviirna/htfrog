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

  state = {
    muncul: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ muncul: Math.floor(Math.random() * 9) + 1 });
    }, 1000);
  }

  async componentDidUpdate() {
    await setTimeout(() => {
      this.setState({ muncul: Math.floor(Math.random() * 9) + 1 });
    }, 1000);
  }

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
            ...basicStyle.containerFluid,
            ...basicStyle.center
          }}
        >
          <View
            style={{
              ...basicStyle.col,
              alignItems: "center",
              justifyContent: "center",
              width: Resolution.fullWidth,
              flexWrap: "wrap"
            }}
          >
            <View>
              <Kodok i={1} muncul={this.state.muncul} style={basicStyle.row} />
            </View>
            <View style={{ ...basicStyle.row, alignItems: "center" }}>
              <Kodok i={2} muncul={this.state.muncul} />
              <Kodok i={3} muncul={this.state.muncul} />
            </View>
            <View style={{ ...basicStyle.row, alignItems: "space-between" }}>
              <Kodok i={4} muncul={this.state.muncul} />
              <Kodok i={5} muncul={this.state.muncul} />
              <Kodok i={6} muncul={this.state.muncul} />
            </View>
            <View style={{ ...basicStyle.row, alignItems: "space-around" }}>
              <Kodok i={7} muncul={this.state.muncul} />
              <Kodok i={8} muncul={this.state.muncul} />
            </View>
            <View style={basicStyle.row}>
              <Kodok i={9} muncul={this.state.muncul} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default Game;
