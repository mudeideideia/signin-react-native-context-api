import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth'

import Routes from './src/routes'

function App() {
  //Todo os componentes dentro do provedor tem acesso ao contexto
  // No caso abaixo, todas as rotas tem acesso ao contexto, mas as navegação não
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;