import { StyleSheet, View, SafeAreaView, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function Seis() {
  const [images, setImages] = useState<string[]>([]); 

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Precisamos de acesso à galeria.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Precisamos de acesso à câmera para tirar fotos.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <MaterialIcons name="photo" size={32} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <MaterialIcons name="photo-camera" size={32} color="deepskyblue" />
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.imageContainer}>
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topButtons: {
    position: "absolute",
    top: 0,
    left: 10,
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
  },
  button: {
    padding: 5,
  },
  imageContainer: {
    paddingTop: 60, 
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});
