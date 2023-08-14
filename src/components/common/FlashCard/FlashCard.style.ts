import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  flashHeader: {
    fontSize: getResponsiveStyle(22, "font"),
    fontWeight: "500",
    color: "white",
    padding: getResponsiveStyle(6),
  },
  container: {
    marginVertical: getResponsiveStyle(56),
    marginBottom: getResponsiveStyle(100),
  },
  groupAll: {
    height: "90%",
    display: "flex",
    flexDirection: "row",
    gap: getResponsiveStyle(10),
    marginRight: getResponsiveStyle(8),
    marginLeft: 16,
    paddingBottom: getResponsiveStyle(10),
  },
  flashFront: {
    paddingVertical: 40,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  flashBody: {
    display: "flex",
    flexDirection: "column",
    gap: getResponsiveStyle(16),
    height: "60%",
    justifyContent: "flex-end",
  },
  name: {
    fontSize: getResponsiveStyle(15),
    fontWeight: "600",
    color: "white",
    lineHeight: getResponsiveStyle(15.3),
  },
  description: {
    fontSize: getResponsiveStyle(13),
    color: "white",
    lineHeight: getResponsiveStyle(15.3),
  },
  actionBar: {
    display: "flex",
    alignItems: "center",
    width: "14%",
    justifyContent: "flex-end",
  },
  pl1: {
    width: "100%",
    backgroundColor: "rgba(22, 22, 22, 1)",
  },
  playlist: {
    width: "100%",
    marginLeft: getResponsiveStyle(-16),
    backgroundColor: "rgba(22, 22, 22, 1)",
  },
});
export { styles };
