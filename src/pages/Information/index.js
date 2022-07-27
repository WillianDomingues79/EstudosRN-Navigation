import React from 'react'
import { View, Text } from 'react-native'

//import { styles } from './styles'

export default function Information({ route }) {
  return (
    <View>
      <View style={{ marginTop: 30, marginLeft: 10 }}>
        <Text>Nome: {route.params?.nome}</Text>
        <Text>Telefone: {route.params?.telefone}</Text>
        <Text>Endereço: {route.params?.endereco}</Text>
        <Text>Numero: {route.params?.numero}</Text>
        <Text>Profissão: {route.params?.profissao}</Text>
        <Text>Email: {route.params?.email}</Text>
      </View>
    </View>
  )
}
