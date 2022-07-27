import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack' //-> Stack Navigation,Gestos
// import { createDrawerNavigator } from '@react-navigation/drawer' -> Drawer Navigation, Menu Lateral
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Contacts from './src/pages/Contacts/'
import Information from './src/pages/Information/'
import AppContacts from './src/pages/AppContacts/'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Anotações" component={AppContacts} />
      <Tab.Screen name="Contatos" component={Contacts} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Aplicativo Agenda" component={Tabs} />
        <Stack.Screen name="Informações" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
