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
    flexDirection: "row",
    marginVertical: 6
  },
  col: {
    flexGrow: 1,
    flexDirection: "column"
  },
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});
