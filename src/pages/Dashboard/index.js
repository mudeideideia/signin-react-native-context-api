// import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, View, Button, StatusBar } from 'react-native';
import { useAuth } from '../../contexts/auth'

export default function Dashboard() {
  const { SingOut } = useAuth()
  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={SingOut} />
      <StatusBar barStyle='dark' />
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
