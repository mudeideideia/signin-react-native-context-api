// import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Button, View, StatusBar } from 'react-native';
import { useAuth } from '../../contexts/auth'

export default function SignIn() {

  const { signIn } = useAuth()
  
  async function handleSignIn() {
    await signIn()
  }
  return (
    <View style={styles.container}>
      <Button title='Sign In' onPress={handleSignIn}></Button>
      <StatusBar barStyle='dark-content'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
