import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { styles } from "./CustomText.style";
type CustomTextProps = {
  children: string | string[];
  style?: TextStyle;
} & TextProps;
const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text style={[styles.defaultCustomText, style]} {...props }>
      {children}
    </Text>
  );
};
export default CustomText;
