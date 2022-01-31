import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

//components
import { HomeScreen } from '../screen/HomeScreen';
import { Animation101Screen } from '../screen/Animation101Screen';
import { Animation102Screen } from '../screen/Animation102Screen';
import { SwitchScreen } from '../screen/SwitchScreen';
import { AlertScreen } from '../screen/AlertScreen';
import { TextInputScreen } from '../screen/TextInputScreen';


const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
            <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
            <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
            <Stack.Screen name="AlertScreen" component={ AlertScreen } />
            <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
        </Stack.Navigator>
    );
}