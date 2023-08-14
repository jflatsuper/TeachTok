import React, { JSX } from "react";
import { SafeAreaView, View } from "react-native";
import { BottomNavBar } from "../NavBar";
import { style } from "./Layout.style";
import LinearGradient from "react-native-linear-gradient";

type LayoutProps = {
  TopNavBar?: JSX.Element;
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children, TopNavBar = <></> }) => {
  return (
    <LinearGradient
      colors={["#rgba(0, 29, 40, 1)", "#rgba(0, 66, 90, 1)"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={style.container}>
        <View style={style.topNav}>{TopNavBar}</View>
        {children}
      </SafeAreaView>
      <View style={style.bottomNav}>
        <BottomNavBar />
      </View>
    </LinearGradient>
  );
};
export default Layout;
