import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: getResponsiveStyle(5),
    alignItems: "center",
  },
  text: {
    opacity: 0.4,
    color: "white",
  },
});
export { styles };
