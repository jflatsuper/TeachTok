import React, { FC } from "react";
import { CustomText } from "../../CustomText";
import { Pressable, View } from "react-native";
import { ActionItemProps } from "../../../../types/actionTypes";
import { styles } from "./ActionItem.style";
const ActionItem: FC<ActionItemProps> = ({ Icon, onPress, label }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Icon />
      </Pressable>
      {!!label && <CustomText style={styles.text}>{label}</CustomText>}
    </View>
  );
};
export default ActionItem;
