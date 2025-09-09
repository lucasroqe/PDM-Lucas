import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import * as ScreenOrientation from "expo-screen-orientation";

const Cinco: React.FC = () => {
  const [mode, setMode] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [namesList, setNamesList] = useState<string[]>([]);

  const handleSaveName = () => {
    if (currentName.trim()) {
      setNamesList([...namesList, currentName.trim()]);
      setCurrentName("");
    }
  };

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
          orientationInfo.orientation ===
            ScreenOrientation.Orientation.PORTRAIT_UP ||
          orientationInfo.orientation ===
            ScreenOrientation.Orientation.PORTRAIT_DOWN
        ) {
          setMode("portrait");
        } else if (
          orientationInfo.orientation ===
            ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
          orientationInfo.orientation ===
            ScreenOrientation.Orientation.LANDSCAPE_RIGHT
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
    middle: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F08080",
      padding: 20,
    },
    bottom: {
      flex: 3,
      alignItems: "center",
      backgroundColor: "#FF6347",
      padding: 10,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      width: "100%",
      paddingHorizontal: 10,
      backgroundColor: "#FFF",
      borderRadius: 5,
    },
    listTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#FFF',
    },
    listItem: {
      fontSize: 16,
      padding: 5,
      color: '#FFF',
    },
  });

  const stylesLandscape = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      paddingTop: Constants.statusBarHeight,
    },
    middle: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F0E68C",
      padding: 20,
    },
    bottom: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#BDB76B",
      padding: 10,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      width: "100%",
      paddingHorizontal: 10,
      backgroundColor: "#FFF",
      borderRadius: 5,
    },
    listTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#555',
    },
    listItem: {
      fontSize: 16,
      padding: 5,
      color: '#333',
    },
  });

  const currentStyles = mode === "portrait" ? stylesPortrait : stylesLandscape;

  return (
    <SafeAreaView style={currentStyles.container}>
      <View style={currentStyles.middle}>
        <TextInput
          style={currentStyles.input}
          placeholder="Digite um nome..."
          value={currentName}
          onChangeText={setCurrentName}
          onSubmitEditing={handleSaveName}
          returnKeyType="done"
        />
      </View>
      <View style={currentStyles.bottom}>
        <Text style={currentStyles.listTitle}>Nomes Salvos</Text>
        <ScrollView style={{ width: '100%' }}>
          {namesList.map((name, index) => (
            <Text key={index} style={currentStyles.listItem}>
              - {name}
            </Text>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cinco;