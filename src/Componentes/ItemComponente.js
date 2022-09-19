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

  getEstilo(){
    if (this.props.quantidade < 10) {
        return { color: 'red' }
    } else {
        return { color: 'black' }
    }
  }

    render(){
        return(

            <View>
                <View>                
                <TextInput>Nome: {this.props.nome}</TextInput>
                <TextInput>Preço: {this.props.preco}</TextInput>
                <TextInput style={this.getEstilo()}>Quantidade: {this.props.quantidade}</TextInput>
                <TextInput>Total: {this.props.quantidade * this.props.preco}</TextInput>          
                </View>
                <View style={estilo.areaBotao}>
                    <TouchableOpacity 
                      onPress={() => this.props.atualizar(this.props.item)}
                      style={estilo.botao}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>VENDIDO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => this.props.remover(this.props.id)}
                      style={estilo.botao}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>REMOVER</Text>
                    </TouchableOpacity>
                </View>
            </View>       
        )
    }
}

const estilo = StyleSheet.create({
  botao: {
    backgroundColor: 'lightgreen',
    width: 150,
    margin: 5,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  areaBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})