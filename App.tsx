/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Constants } from "react-native-ui-lib";
import { Stack } from "./navigation/Stack";
import { ScreenConfig } from "./navigation/ScreenConfig";
const Main = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <>
            {ScreenConfig.map((args) => (
              <Stack.Screen key={args.name} {...args} />
            ))}
          </>
        </Stack.Navigator>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={"black"}
          translucent={true}
          hidden={true}
        />
      </NavigationContainer>
    </View>
  );
};
const App: React.FC = () => {
  return <Main />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "ios" ? Constants.statusBarHeight : 20,
    height: Platform.OS === "ios" ? Constants.statusBarHeight : 48,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
