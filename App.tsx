import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Um from "@/listas/lista1/ex1";
import Dois from "@/listas/lista1/ex2";
import Tres from "@/listas/lista1/ex3";
import Quatro from "@/listas/lista1/ex4";
// .... demais exercícios 
import Icon from "react-native-vector-icons/AntDesign";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Um">
        <Drawer.Screen
          name="Um"
          component={Um}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Dois"
          component={Dois}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Tres"
          component={Tres}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="setting" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Quatro"
          component={Quatro}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="star" size={size} color={color} />
            ),
          }}
        />
        {/* // .... demais exercícios */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
