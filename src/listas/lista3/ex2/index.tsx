import React from "react";
import { View, Button, Linking, StyleSheet } from "react-native";

export default function Dois() {
  const numeroTell = "55129985252"; 

  const ligar = () => {
    Linking.openURL(`tel:${numeroTell}`);
  };

  return (
    <View style={styles.container}>
      <Button title="Ligar" onPress={ligar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
