import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'

import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'
import { NativeEventEmitter } from "react-native-web";

const Stack = createStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="Information" component={Information}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}
