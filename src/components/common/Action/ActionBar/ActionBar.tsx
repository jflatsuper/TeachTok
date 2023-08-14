import React from "react";
import ActionItem from "../ActionItem/ActionItem";
import { ActionItems } from "./ActionItems";
import { View } from "react-native";
import { styles } from "./ActionBar.style";
import { uniqueId } from "lodash";
const ActionBar: React.FC = () => {
  return (
    <View style={styles.actionContainer}>
      {ActionItems.map((item) => (
        <ActionItem key={uniqueId()} {...item} />
      ))}
    </View>
  );
};
export default ActionBar;
