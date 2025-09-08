import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as ScreenOrientation from "expo-screen-orientation";

const Dois: React.FC = () => {
  const [mode, setMode] = useState("");

  const readOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    if (
      orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
      orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    ) {
      setMode("portrait");
    } else if (
      orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    ) {
      setMode("landscape");
    }
  };

  const subscription = ScreenOrientation.addOrientationChangeListener(
    ({ orientationInfo }) => {
      if (
        orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
        orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
      ) {
        setMode("portrait");
      } else if (
        orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
        orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
      ) {
        setMode("landscape");
      }
    }
  );

  useEffect(() => {
    readOrientation();
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const flexDirection = mode === "portrait" ? "column" : "row";

  return (
    <SafeAreaView style={[styles.container, { flexDirection }]}>
      <View style={styles.top}>
        <Text>Top</Text>
      </View>
      <View style={styles.middle}>
        <Text>Middle</Text>
      </View>
      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA07A",
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F08080",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6347",
  },
});

export default Dois;
