import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['react-native-gesture-handler']);

// componentes de navegacion
import { Navigation } from './src/navigation/Navigation';

export const App = () => {
  return(
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    
    )
};

export default App;
