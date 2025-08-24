import { StyleSheet, View, Image } from "react-native";
import logo from "@/../assets/adaptive-icon.png";
import Constants from "expo-constants";

export default function Quatro() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top1}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View style={styles.top0}>
          <View style={styles.top2}>
            <Image source={logo} style={styles.logo}/>
          </View>
          <View style={styles.top3}>
            <Image source={logo} style={styles.logo}/>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Image source={logo} style={styles.logo}/>
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
  },
  top0: {
    flex: 0.5,
    backgroundColor: "lime",
  },
  top2: {
    flex: 0.5,
    backgroundColor: "aquamarine",
  },
  top3: {
    flex: 0.5,
    backgroundColor: "skyblue",
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "salmon",
  },
  logo: {
    flex: 1,
    alignSelf: "center",
    resizeMode: "contain"
  },
});
