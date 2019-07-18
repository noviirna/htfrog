import { Provider, Dimensions } from "react-native";

export const Resolution = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const color = {
  blue: "#033C73",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c",
  red: "#C71C22",
  orange: "#fd7e14",
  yellow: "#DD5600",
  green: "#73A839",
  teal: "#20c997",
  cyan: "#2FA4E7",
  white: "#fff",
  gray: "#868e96",
  grayDark: "#343a40",
  primary: "#2FA4E7",
  secondary: "#e9ecef",
  success: "#73A839",
  info: "#033C73",
  warning: "#DD5600",
  danger: "#C71C22",
  light: "#f8f9fa",
  dark: "#343a40"
};

export const p0 = {
  "1": 10,
  "2": 20,
  "3": 30,
  "4": 40,
  "5": 50
};

export const p001 = {
  "1": "1%",
  "2": "2%",
  "3": "3%",
  "4": "4%",
  "5": "5%",
  "6": "6%",
  "7": "7%",
  "8": "8%",
  "9": "9%",
  "10": "10%"
};
export const p0001 = {
  "1": "0.1%",
  "2": "0.2%",
  "3": "0.3%",
  "4": "0.4%",
  "5": "0.5%"
};

export const fontsSize = {
  small: 8,
  p: 12,
  h5: 16,
  h4: 20,
  h3: 24,
  h2: 28,
  h1: 32
};

export const colSize = {
  1: "8.33%",
  2: "16.66%",
  3: "25%",
  4: "33.33%",
  5: "42.66%",
  6: "50%",
  7: "58.33%",
  8: "66.66%",
  9: "75%",
  10: "83.33%",
  11: "91.66%",
  12: "100%"
};

export const btn = {
  sm: {
    width: "33%",
    height: "auto"
  },
  md: {
    width: "66%",
    height: "auto"
  },
  lg: {
    width: "100%",
    height: "auto"
  }
};

export const img = {
  sm: {
    square: { width: 128, height: 128 },
    potrait: { width: 72, height: 128 },
    landscape: { width: 128, height: 72 }
  },
  md: {
    square: { width: 256, height: 256 },
    potrait: { width: 144, height: 256 },
    landscape: { width: 256, height: 144 }
  },
  lg: {
    square: { width: 512, height: 512 },
    potrait: { width: 384, height: 512 },
    landscape: { width: 512, height: 384 }
  }
};

export const imgRes = {
  square: { width: "auto", height: "auto", maxWidth: 256, height: 256 },
  potrait: { width: "auto", height: "auto", maxWidth: 144, height: 256 },
  landscape: { width: "auto", height: "auto", maxWidth: 256, height: 144 }
};
