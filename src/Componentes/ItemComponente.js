import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ItemComponente extends Component {

    render(){
        return(

            <View>
                <View style={estilo.corpo}>                
                <TextInput style={estilo.entradaTexto}>Nome: </TextInput>
                <TextInput style={estilo.entradaTexto}>Preço: </TextInput>
                <TextInput style={estilo.entradaTexto}>Quantidade: </TextInput>          
                </View>
                <View style={estilo.areaBotao}>
                    <TouchableOpacity style={estilo.botao}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>VENDIDO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.botao}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>REMOVER</Text>
                    </TouchableOpacity>
                </View>
            </View>       
        )
    }
}

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 20,
    margin: 10,
    color: 'black',
  },
  corpo: {
    alignItems: 'center',         // alinhamento vertical 'objetos'
    justifyContent: 'center',     // alinhamento vertical 'objetos'
  },
  botao: {
    backgroundColor: 'lightgreen',
    width: 150,
    margin: 5,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entradaTexto: {
    borderWidth: 1,
    width: 300,               //     largura
    height: 35,               //    altura
    margin: 5,                //    margem externa
    borderColor: 'green',
    borderRadius: 20,
  },
  areaBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
})