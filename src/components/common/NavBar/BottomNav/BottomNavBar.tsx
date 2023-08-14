
import { View } from "react-native";
import { BottomNavBarRoutes } from "./BottomNavBarRoutes";
import BottomNavBarIcon from "./BottomNavBarIcon";
import {
  styles,
  styleContainer,
} from "./BottomNavBar.style";
import React from "react";

const BottomNavBar: React.FC = () => {
  return (
    <View style={[styles.container, styleContainer()]}>
      <View style={[ styles.iconsContainer]}>
        {BottomNavBarRoutes.map(
          ({ icon, id, label, screen, disabled }) => (
            <BottomNavBarIcon
              key={id}
              icon={icon}
              label={label}
              to={screen}
              disabled={disabled}
            />
          )
        )}
      </View>
    </View>
  );
};

export default BottomNavBar;
