import React, { useMemo, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { styles } from "./SlidingUnderline.style";
type SlidingUnderlineProps = {
  values: HomeTopMenu[];
  active: any;
  setActive: React.Dispatch<React.SetStateAction<any>>;
};
const SlidingUnderline: React.FC<SlidingUnderlineProps> = ({
  values,
  active,
  setActive,
}) => {
  const val = useMemo(
    () => values.find((item) => item.value == active),
    [values, active]
  );
  const initial = useMemo(() => {
    return val ? (val?.id - 1) * val?.title.length * 4.5 + 10 : 0;
  }, [val]);
  const translateX = useRef(new Animated.Value(initial)).current;
  const handleTabPress = (tabIndex: number, textlength: number, value: any) => {
    setActive(value);
    // Calculate the position and width of the underline based on the active tab
    const underlinePosition = (tabIndex - 1) * textlength * 4.5 + 10; // Assuming each tab is 100 units wide
    // Animate the underline position and width
    Animated.timing(translateX, {
      toValue: underlinePosition,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.tabContainer}>
      {values.map(({ id, title, value }) => (
        <TouchableOpacity
          key={id}
          style={styles.tab}
          onPress={() => handleTabPress(id, title.length, value)}
        >
          <Text
            style={[styles.tabText, active === value && styles.activeTabText]}
          >
            {title}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.underline,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};
export default SlidingUnderline;
