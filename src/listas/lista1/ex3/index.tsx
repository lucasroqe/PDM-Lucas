import { StyleSheet, View } from 'react-native'
import Constants from "expo-constants";

export default function Tres() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top1}></View>
        <View style={styles.top2}>
          <View style={styles.top3}></View>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    top:{
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: 'crimson'
    },
    top1:{
        flex: 0.5,
        backgroundColor: 'lime'
    },
    top2:{
        flex: 0.5,
        backgroundColor: 'aquamarine'
    },
    top3:{
        flex: 0.5,
        backgroundColor: 'skyblue'
    },
    bottom:{
        flex: 0.5,
        backgroundColor: 'salmon'
    }
})