import { StyleSheet } from "react-native";
import {
  getHeight,
  getResponsiveStyle,
  getWidth,
} from "../../../utils/getResponsiveStyles";

const style = StyleSheet.create({
  bottomNav: {
    flex: 1,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  topNav: {
    flex: 1,
    position: "absolute",
    width: getWidth(),
    padding: getResponsiveStyle(10),
    top: 0,
    zIndex:300
  },
  container: {
    minWidth: getWidth(),
    flex: 1,
    minHeight: getHeight(),
    padding: getResponsiveStyle(20),
    paddingBottom: getResponsiveStyle(65),
    // position: "relative",
  },
});
export { style };
