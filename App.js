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
import Item from './src/Models/Item'
import ItemComponente from './src/Componentes/ItemComponente';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      nome: '',
      preco: 0.0,
      quantidade: 0,
      lista: []       // vetor     variável declarada como vetor
    }
  }

  Cadastrar = (nome, preco, quantidade) => {
    const itemNovo = new Item(nome, preco, quantidade);  // criando um objeto
    this.state.lista.push(itemNovo);     // adicionando um item no vetor
  }

  render(){
    return(
      <ScrollView>
        <View style={estilo.corpo}>
          <Text style={estilo.titulo}>CONTROLE DE ESTOQUE</Text>
          <TextInput onChangeText={(valorDigitado) => {this.setState({nome: valorDigitado})}} style={estilo.entradaTexto}></TextInput>
          <TextInput onChangeText={(valorDigitado) => {this.setState({preco: valorDigitado})}}style={estilo.entradaTexto}></TextInput>
          <TextInput onChangeText={(valorDigitado) => {this.setState({quantidade: valorDigitado})}} style={estilo.entradaTexto}></TextInput>          
        </View>
        <View style={estilo.areaBotao}>
            <TouchableOpacity 
              onPress={() => this.Cadastrar(this.state.nome , this.state.preco , this.state.quantidade)}
              style={estilo.botao}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>SALVAR</Text>
            </TouchableOpacity>
          </View>

          {/* Lista de item */}

          <View>
            <Text style={estilo.titulo}>Lista de Itens</Text>
            {
              this.state.lista.map( elementoLista => (
                <ItemComponente>
                  nome={elementoLista.nome}
                  preco={elementoLista.preco}
                  quantidade={elementoLista.quantidade}
                </ItemComponente>
              )

              )
            }
          </View>
      </ScrollView>
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