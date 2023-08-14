import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: getResponsiveStyle(52),
    padding: getResponsiveStyle(12),

    borderRadius: getResponsiveStyle(8),
  },
  text: {
    fontSize: getResponsiveStyle(17),
    textShadowColor: "black",
    fontWeight: "500",
    width: "90%",
    color: "white",
  },
  icon: { width: 36 },
});
export { styles };
