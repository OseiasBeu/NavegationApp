import React from "react";
import {View, Text } from 'react-native'

export default function Contacts({navigation}){
    return(
        <View>
            <View style={{marginTop:60}}>
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (11) 5533-5565</Text>
                <Text
                onPress={()=> navigation.navigate('Information',
                {
                    nome: 'João Silva',
                    telefone:'(11) 5533-5565',
                    endereco: 'rua das flores',
                    numero:198,
                    profissao:'carpinteiro',
                    email:'JoaoSilva@carpintaria.com.br'
                }
                )}
                >Information...
                </Text>
            </View>

            <View style={{marginTop:60}}>
                <Text>Nome: Oseias Beu</Text>
                <Text>Telefone: (11) 5633-7652</Text>
                <Text
                onPress={()=> navigation.navigate('Information',
                {
                    nome: 'Oseias Beu',
                    telefone:' (11) 5633-7652',
                    endereco: 'rua das neves',
                    numero:192,
                    profissao:'carpinteiro',
                    email:'beuoseias@gmail.com'
                }
                )}
                >Information...
                </Text>
            </View>
        </View>
    )
}