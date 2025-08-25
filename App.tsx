import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onze from "@/listas/lista2/ex1";
import Um from "@/listas/lista1/ex1"
import Dois from "@/listas/lista1/ex2"
import Tres from "@/listas/lista1/ex3"
import Quatro from "@/listas/lista1/ex4"
// .... demais exercícios 

import { RootStackParamList } from "@/../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onze">
        <Stack.Screen name="Onze" component={Onze}/>
        <Stack.Screen name="Um" component={Um}/>
        <Stack.Screen name="Dois" component={Dois}/>
        <Stack.Screen name="Tres" component={Tres}/>
        <Stack.Screen name="Quatro" component={Quatro}/>
        {/* // .... demais exercícios  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
