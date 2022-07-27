import React from 'react'
import { View, Text } from 'react-native'

//import { styles } from './styles'

export default function Contacts({ navigation }) {
  return (
    <View style={{ marginLeft: 10 }}>
      <View style={{ marginTop: 30 }}>
        <Text>Nome: Joao Silva</Text>
        <Text>Telefone: (15) 98888-8999</Text>
        <Text
          onPress={() =>
            navigation.navigate('Informações', {
              nome: 'João Silva',
              telefone: '(15) 98888-8999',
              endereco: 'Rua das Flores',
              numero: '769',
              profissao: 'Carpinteiro',
              email: 'joaosilva@carpinteiro.com.br'
            })
          }
        >
          Ver mais ...
        </Text>
      </View>

      <View style={{ marginTop: 60 }}>
        <Text>Nome: Amanda Silva</Text>
        <Text>Telefone: (15) 55555-9999</Text>
        <Text
          onPress={() =>
            navigation.navigate('Informações', {
              nome: 'Amanda Silva',
              telefone: '(15) 55555-9999',
              endereco: 'Rua das Orquideas',
              numero: '850',
              profissao: 'Desenvolvedora',
              email: 'amandasilva@desen.com.br'
            })
          }
        >
          Ver mais ...
        </Text>
      </View>
    </View>
  )
}
