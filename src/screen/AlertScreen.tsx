import React from 'react';
import { Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () =>{

        Alert.alert(
            "Titulo",
            "Este es el msm de la alerta",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: 'destructive'
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            // para cancelar o cerrar tocando fuera del modarl o alert
            {
                cancelable: true,
                onDismiss: () => console.log( 'onDismiss' )
            },
        )
    }

    const showPrompt = () =>{
        //en android no hay respuesta
        // Alert.prompt(
        //     '¿Estas seguro?',
        //     'Esta accion no se puede revertir',
        //     ( valor: string ) => console.log('info: ',valor),
        //     'plain-text',
        //     'email-addres',
        // )

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );

    }

    return(
        <View style={ styles.gobalMargin }>
            <HeaderTitle title='Alert'/>

            <Button
                title='Mostrar Alerta'
                onPress={ showAlert }
            />

            <View  style={{ height: 10 }}/>

            <Button
                title='Mostrar Prompt No Android'
                onPress={ showPrompt }
            />
        </View>
    );
};
