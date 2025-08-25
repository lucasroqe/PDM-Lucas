import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Onze from "@/listas/lista2/ex1";
import Um from "@/listas/lista1/ex1"
import Dois from "@/listas/lista1/ex2"
import Tres from "@/listas/lista1/ex3"
import Quatro from "@/listas/lista1/ex4"
// .... demais exercícios 

import { RootStackParamList } from "@/../types";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Onze">
        <Drawer.Screen name="Onze" component={Onze}/>
        <Drawer.Screen name="Um" component={Um}/>
        <Drawer.Screen name="Dois" component={Dois}/>
        <Drawer.Screen name="Tres" component={Tres}/>
        <Drawer.Screen name="Quatro" component={Quatro}/>
        {/* // .... demais exercícios  */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
