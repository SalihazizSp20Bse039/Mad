import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';

const image = '../assets/Download.jpg';

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require(image)} resizeMode="cover" style={styles.image}>
      <View style={styles.overlayContent}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#333"
          secureTextEntry={true}
        />
      </View>
    </ImageBackground>
    <View style={styles.bottomView}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => { /* Handle Login */ }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => { /* Handle Forgot Password */ }}
        style={styles.textButton}
      >
        <Text style={styles.textButtonLabel}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => { /* Handle Create Account */ }}
        style={styles.textButton}
      >
        <Text style={styles.textButtonLabel}>Create a new account</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 2,
    justifyContent: 'center',
  },
  overlayContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: "80%",
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: "80%",
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  textButtonLabel: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

