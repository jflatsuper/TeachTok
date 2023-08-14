import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";

const styles=StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        minHeight: getResponsiveStyle(46),
        justifyContent: "space-between",
        alignItems: "center",
      },
      text:{color:"white"}
})
export {styles}