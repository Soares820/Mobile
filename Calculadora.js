import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

export default function CalculadoraDeGastos() {
  const [gastoAlimentacao, setGastoAlimentacao] = useState('');
  const [gastoTransporte, setGastoTransporte] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularGastos = () => {
    const alimentacao = parseFloat(gastoAlimentacao);
    const transporte = parseFloat(gastoTransporte);

   
    if (isNaN(alimentacao) || isNaN(transporte)) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const gastoTotal = alimentacao + transporte;
    const mediaDiaria = gastoTotal / 30;

    setResultado(
      `O Total de gastos no mês é de R$ ${gastoTotal.toFixed(2)} e a média diária de gastos é de R$ ${mediaDiaria.toFixed(2)}`
    );

    
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4647/4647652.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Calculadora de Gastos</Text>

        <TextInput
          style={styles.input}
          placeholder="Gasto com alimentação"
          keyboardType="numeric"
          onChangeText={(text) => setGastoAlimentacao(text)}
          value={gastoAlimentacao}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Gasto com transporte"
          keyboardType="numeric"
          onChangeText={(text) => setGastoTransporte(text)}
          value={gastoTransporte}
        />

        <TouchableOpacity style={styles.button} onPress={calcularGastos}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

        {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  logo: {
    width: 120,   
    height: 120,  
    marginBottom: 20, 
  },
  title: {
    fontSize: 28,  
    fontWeight: 'bold', 
    color: '#333',
    marginBottom: 30, 
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#007AFF',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 30,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
