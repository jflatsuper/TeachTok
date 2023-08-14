import { StyleSheet } from "react-native";
import { getResponsiveStyle } from "../../../../utils/getResponsiveStyles";

const styles=StyleSheet.create({
    actionContainer:{
        display:'flex',
        flexDirection:'column',
        gap:getResponsiveStyle(15)
    }
})
export {styles}