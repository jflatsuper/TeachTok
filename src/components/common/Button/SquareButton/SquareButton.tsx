import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { styles } from "./SquareButton.style";
import { CustomText } from "../../CustomText";
type SquareButtonProps = {
  title: string;
  onPress: VoidFunction;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
};
const SquareButton: React.FC<SquareButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <Pressable style={[styles.button, containerStyle]} onPress={onPress}>
      <CustomText style={[styles.text, textStyle]}>{title}</CustomText>
    </Pressable>
  );
};
export default SquareButton;
