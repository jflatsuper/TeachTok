import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  questionHeader: {
    fontSize: getResponsiveStyle(22, "font"),
    fontWeight: "500",
    color: "white",
    padding: getResponsiveStyle(6),
  },
  questionHeaderContainer: {
    backgroundColor: "black",
    opacity: 0.5,
    borderRadius: getResponsiveStyle(8),
  },
  optionContainerGroup: {
    display: "flex",
    flexDirection: "column",
    gap: getResponsiveStyle(16),
    height: "60%",
    justifyContent: "flex-end",
  },
  optionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: getResponsiveStyle(16),
  },
  actionBar: {
    display: "flex",
    alignItems: "center",
    width: "14%",
    justifyContent: "flex-end",
  },
  playlist: { width: "100%", marginLeft: getResponsiveStyle(-16) },
  text: {
    fontSize: getResponsiveStyle(15),
    fontWeight: "600",
    color: "white",
    lineHeight: getResponsiveStyle(15.3),
  },
  questionGroup: {
    height: "90%",
    display: "flex",
    flexDirection: "row",
    gap: getResponsiveStyle(10),
    marginRight: getResponsiveStyle(8),
    marginLeft: 16,
    paddingBottom: getResponsiveStyle(10),
  },
  container: {
    marginVertical: getResponsiveStyle(56),
    marginBottom: getResponsiveStyle(100),
  },
  q1: { width: "83%", height: "100%" },
  q2: { height: "40%", paddingVertical: 40, width: "80%" },
});
export { styles };
