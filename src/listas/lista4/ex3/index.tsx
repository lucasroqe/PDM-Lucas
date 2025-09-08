import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as ScreenOrientation from "expo-screen-orientation";

const Tres: React.FC = () => {
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

  useEffect(() => {
    readOrientation();
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
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const stylesPortrait = StyleSheet.create({
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

  const stylesLandscape = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      paddingTop: Constants.statusBarHeight,
    },
    top: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1E90FF",
    },
    middle: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00BFFF",
    },
    bottom: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#87CEFA",
    },
  });

  const currentStyles = mode === "portrait" ? stylesPortrait : stylesLandscape;

  return (
    <SafeAreaView style={currentStyles.container}>
      <View style={currentStyles.top}>
        <Text>Top</Text>
      </View>
      <View style={currentStyles.middle}>
        <Text>Middle</Text>
      </View>
      <View style={currentStyles.bottom}>
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  );
};

export default Tres;
