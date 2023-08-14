import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";
const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    height:"100%"
  },
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: getResponsiveStyle(10),
    justifyContent:'center',
    width:'100%'
  },
  tabText: {
    fontSize: getResponsiveStyle(16, "font"),
    fontWeight: "600",
    color:'white',
    lineHeight: getResponsiveStyle(22, "font"),
    letterSpacing: -0.01,
    textAlign: "center",
    opacity:0.4
  },
  activeTabText: {
    opacity:1
  },
  tab:{
    display:'flex',
    alignItems:'center',
    gap: getResponsiveStyle(10),
  },
  underline: {
    height: getResponsiveStyle(4),
    width:getResponsiveStyle(30),
    backgroundColor: "white",
    position: "absolute",
    bottom:-5,
  },
});
export { styles };
