import { StyleSheet, Platform } from "react-native";
import { p001 } from "./base";

export const basicStyle = StyleSheet.create({,
  safeAreaViewCustom : {

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
    flexDirection: "row"
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
