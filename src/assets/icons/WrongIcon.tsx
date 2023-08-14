import { FC } from "react";
import { IconProps } from "../../types/iconTypes";
import { Image, View,StyleSheet } from "react-native";
import React from "react";

const WrongIcon: FC<IconProps> = ({  }) => {
    return (
        <View style={styles.container} >
          <Image
            source={require("../img/wrong.gif")}
            style={styles.img}
          />
        </View>
      );
    };
    const styles=StyleSheet.create({
        container:{ height: 56, marginTop: -16 },
        img:{ height: "100%", width: "100%" }
    })
export default WrongIcon;
