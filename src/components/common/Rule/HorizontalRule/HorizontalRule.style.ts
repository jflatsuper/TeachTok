import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomWidth: getResponsiveStyle(2),
    borderBottomColor: "white",
    marginVertical: getResponsiveStyle(24),
    opacity:0.2

  },
});
export { styles };
