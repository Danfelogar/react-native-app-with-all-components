import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['react-native-gesture-handler']);

// componentes de navegacion
import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/ThemeContext';

// const customTheme: Theme ={
//   dark: true,
//   colors:{
//     // ...DarkTheme.colors,
//     // primary: string;
//     // background: 'yellow',
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   }
// }

export const App = () => {
  return(
    <AppState>
        <Navigation />
    </AppState>
    )
};

const AppState = ({ children }: any) =>{

  return(
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;
