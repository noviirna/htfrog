import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { basicStyle } from "../style/styles";
import { p001, color, fontsSize } from "../style/base";
import { SwitchActions } from "react-navigation";

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
          <Text>{this.props.navigation.getParam("message")}</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.dispatch(
                SwitchActions.jumpTo({ routeName: "Landing" })
              );
            }}
          >
            <Button
              style={styles.button}
              title="Play Again"
              color={color.primary}
            />
          </TouchableOpacity>
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
