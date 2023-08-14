import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: getResponsiveStyle(16),
    paddingVertical: getResponsiveStyle(10),
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: getResponsiveStyle(16),
    paddingVertical: getResponsiveStyle(10),
    alignItems: "center",
  },
  playText: {
    color: "white",
    fontSize: getResponsiveStyle(13),
    fontWeight: "600",
  },
});
export { styles };
