import React from "react";
import { View } from "react-native";
import SearchIcon from "../../../../assets/icons/SearchIcon";
import { Timer } from "../../../common/Timer";
import { styles } from "./TopMenu.style";
import { TopMenuItems } from "./MenuItems";
import { SlidingUnderline } from "../../../common/Slider";
type HomeTopMenu = {
  onPress: (value: any) => void;
  active: QuestionType;
};
const TopMenu: React.FC<HomeTopMenu> = ({ onPress, active }) => {
  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Timer />
      </View>
      <View style={styles.textGroup}>
        <SlidingUnderline
          values={TopMenuItems}
          active={active}
          setActive={onPress}
        />
      </View>
      <View style={styles.searchContainer}>
        <SearchIcon />
      </View>
    </View>
  );
};
export default TopMenu;
