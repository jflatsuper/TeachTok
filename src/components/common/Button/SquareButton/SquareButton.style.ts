import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  button: {
    height: getResponsiveStyle(52),
    width: getResponsiveStyle(52),
    borderRadius: getResponsiveStyle(8),
    padding: getResponsiveStyle(12),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export { styles };
