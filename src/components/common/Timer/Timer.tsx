import React from "react";
import { View } from "react-native";
import ActivityIcon from "../../../assets/icons/ActivityIcon";
import { CustomText } from "../CustomText";
import { styles } from "./Timer.style";

const Timer: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIcon fillOpacity={"0.4"} />
      <CustomText style={styles.text}>10m</CustomText>
    </View>
  );
};
export default Timer;
