import { FC } from "react";
import { IconProps } from "../../types/iconTypes";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const CorrectIcon: FC<IconProps> = ({ }) => {
  return (
    <View style={styles.container} >
      <Image
        source={require("../img/correct.gif")}
        style={styles.img}
      />
    </View>
  );
};
const styles=StyleSheet.create({
    container:{ height: 56, marginTop: -16 },
    img:{ height: "100%", width: "100%" }
})
export default CorrectIcon;
