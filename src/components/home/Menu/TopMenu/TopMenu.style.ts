import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  text: {
    fontSize: getResponsiveStyle(16, "font"),
    fontWeight: "600",
    color: "white",
    lineHeight: getResponsiveStyle(22, "font"),
    letterSpacing: -0.01,
    textAlign: "center",
  },
  textGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: getResponsiveStyle(10),
    width: "60%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: getResponsiveStyle(31),
  },
  searchContainer: {
    width: "20%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  timerContainer: { width: "20%", display: "flex" },
});
export { styles };
