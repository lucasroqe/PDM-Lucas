import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/AntDesign";
import Quatro from "@/listas/lista2/ex4";
import { CepProvider } from "@/../contexts/CepContexts";

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Acesse o Ex4 pelo Drawer</Text>
    </View>
  );
}

export default function App() {
  return (
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#3d3c3cff" },
            headerTintColor: "#fff",
            drawerActiveTintColor: "#3d3c3cff",
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Consulta CEP"
            component={Quatro}
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="search1" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
}
