import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack' //-> Stack Navigation,Gestos
// import { createDrawerNavigator } from '@react-navigation/drawer' -> Drawer Navigation, Menu Lateral

import Contacts from './src/pages/Contacts/'
import Information from './src/pages/Information/'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contatos" component={Contacts} />
        <Stack.Screen name="Informações" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
