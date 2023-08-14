import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useMemo } from "react";
import { Pressable, View } from "react-native";
import { styles } from "./BottomNavBar.style";
import { TUseNavigation } from "../../../../types/exportedTypes";
import { IconProps } from "../../../../types/iconTypes";
import { CustomText } from "../../CustomText";

type Props = {
  icon: React.FC<IconProps>;
  label?: string;
  to: string;
  disabled: boolean;
};

const BottomNavBarIcon: React.FC<Props> = ({
  icon: Icon,
  label = "",
  to,
  disabled,
}) => {
  const route = useRoute();
  const isActive = useMemo(() => route.name === to, [route, to]);
  const navigation = useNavigation<TUseNavigation>();
  const placeHolder = () => {
    /* placeholder function - no use  */
  };
  const handlePress = useCallback(() => {
    disabled ? placeHolder() : navigation.navigate(to as any);
  }, [disabled, navigation, to, placeHolder]);

  return (
    <Pressable style={[styles.icon]} onPress={handlePress}>
      <View style={styles.group}>
        <View style={styles.iconCon}>
          <Icon fillOpacity={isActive ? "1" : "0.4"} />
        </View>
        <CustomText style={styles.text}>{label}</CustomText>
      </View>
    </Pressable>
  );
};
export default BottomNavBarIcon;
