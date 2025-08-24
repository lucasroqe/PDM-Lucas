import { StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";
import logo from "@/../assets/adaptive-icon.png";
import Constants from "expo-constants";

export default function Cinco() {
  function handleMessage() {
    Alert.alert("Boa noite!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top1}>
          <TouchableOpacity onPress={handleMessage}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.top0}>
          <View style={styles.top2}>
            <TouchableOpacity onPress={handleMessage}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
          <View style={styles.top3}>
            <TouchableOpacity onPress={handleMessage}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={handleMessage}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  top: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "crimson",
  },
  top1: {
    flex: 0.5,
    backgroundColor: "lime",
    justifyContent: "center",
    alignItems: "center"
  },
  top0: {
    flex: 0.5,
    backgroundColor: "lime",
  },
  top2: {
    flex: 0.5,
    backgroundColor: "aquamarine",
    justifyContent: "center",
    alignItems: "center",
  },
  top3: {
    flex: 0.5,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "salmon",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 64,
    height: 64,
  },
});
