import { StyleSheet, Platform } from "react-native";
import { p001 } from "./base";

export const basicStyle = StyleSheet.create({
  safeAreaViewCustom: {
    flexGrow: 1
  },
  containerFluid: {
    flexGrow: 1
  },
  container: {
    paddingHorizontal: p001["1"]
  },
  center: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  col: {
    flexDirection: "column"
  },
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});
