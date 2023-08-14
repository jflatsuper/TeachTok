import { FC } from "react";
import { IconProps } from "react-native-ui-lib";

export type ActionItemProps = {
    Icon: FC<IconProps>;
    onPress: VoidFunction;
    label?: string;
  };