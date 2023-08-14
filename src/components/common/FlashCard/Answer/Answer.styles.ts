import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";

const styles = StyleSheet.create({
  answerText: {
    fontSize: getResponsiveStyle(21, "font"),
    fontWeight: "500",
    color: "white",
    opacity: 0.5,
  },
  howWell: {
    color: "white",
    opacity: 0.5,
  },
  answer: {
    color: "rgba(45, 197, 159, 1)",
    fontSize: getResponsiveStyle(13),
    fontWeight: "800",
  },
  container:{
    display: "flex",
    flexDirection: "column",
    gap: getResponsiveStyle(10),
    marginTop: getResponsiveStyle(32),
  },
  textStyle:{
    fontSize: getResponsiveStyle(17),
    color: "white",
  },
  btnContainer:{
    display: "flex",
    flexDirection: "row",
    gap: getResponsiveStyle(10),
  }
});
export { styles };
