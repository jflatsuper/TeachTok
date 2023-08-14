import palettes from "../../../../config/palette";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";
import { StyleSheet } from "react-native";
function styleContainer() {
  return {
    top: 0,
  };
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "black",
    width: "100%",
    height: getResponsiveStyle(83),
    paddingTop: getResponsiveStyle(6),
  },
  text: {
    color: palettes.light[0],
    fontWeight: "500",
    flex: 1,
    width: "100%",
    textAlign: "center",
    fontSize: getResponsiveStyle(10, "font"),
    lineHeight: getResponsiveStyle(13, "font"),
    marginTop: getResponsiveStyle(6),
  },
  icon: {
    flex: 1,
    alignItems: "center",
  },
  iconCon:{
    height:getResponsiveStyle(21)
  },
  group:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  }
});
export { styleContainer, styles, };
