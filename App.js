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
import ItemDatabase from './src/Database/ItemDatabase';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      nome: '',
      preco: 0.0,
      quantidade: 0,
      lista: []       // vetor     variável declarada como vetor
    }
    this.Listar();
  }
  
  //                CRUD

  //                READ
  Listar = () => {
    const banco = new ItemDatabase();                   // criar o objeto banco
    banco.Listar() .then(                               // chamar  metodo Lista()
      listaCompleta => {
        this.setState({lista: listaCompleta})           // o vetor 'lista' recebe o conteúdo de 'listaCompleta'
      }
    )                                    

  }

  //              CREATE
  Cadastrar = (nome, preco, quantidade) => {
    const itemNovo = new Item(nome, preco, quantidade);  // criando um objeto
    const banco = new ItemDatabase();                   // criando objeto 'banco'
    banco.Inserir(itemNovo);                            // cadastra no banco
    this.Listar();
    //this.state.lista.push(itemNovo);     // adicionando um item no vetor
    //this.forceUpdate();                   //  atualiza a lista  // adiciona itens
  }

  //              UPDATE
  Atualizar = (item) => {      
    const banco = new ItemDatabase();    
    banco.Atualizar(item);
    this.Listar();

  }

  //            DELETE
  Remover = (id) => {
    const banco = new ItemDatabase();
    banco.Remover(id);
    this.Listar();

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
                <ItemComponente                 
                id={elementoLista.id}
                item={elementoLista}
                nome={elementoLista.nome}
                preco={elementoLista.preco}
                quantidade={elementoLista.quantidade} 
                atualizar={this.Atualizar}
                remover={this.Remover}/>   
              ))
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