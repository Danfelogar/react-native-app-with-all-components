import React, { useContext, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const { form , onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubs: false,

    });
    const { theme:{ colors, dividerColor } } = useContext( ThemeContext );

    return(
        <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }>
            <ScrollView>
                {/* esto crea una capa en mi switch que evita que lo use */}
                {/* <TouchableWithoutFeedback onPress={ Keyboard.dismiss } > */}
                    <View style={ styles.gobalMargin }>
                        <HeaderTitle title='TextInputs' />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingrese su nombre'
                            placeholderTextColor={ dividerColor }
                            autoCorrect={ false }
                            autoCapitalize='words'
                            onChangeText={ (value) => onChange( value, 'name' ) }
                        />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingrese su email'
                            placeholderTextColor={ dividerColor }
                            autoCorrect={ false }
                            autoCapitalize='none'
                            onChangeText={ (value) => onChange( value, 'email' ) }
                            keyboardType='email-address'
                            //solo para IOS asigna un backgraund al teclado
                            keyboardAppearance='dark'
                        />

                        <View style={ stylesScreen.switchRow } >
                            <Text style={{ ...stylesScreen.switchText, color:  colors.text }}>Subcribirse</Text>
                            <CustomSwitch isOn={ form.isSubs } onChange={ ( value ) => onChange( value, 'isSubs' ) }/>
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingrese su telefono'
                            placeholderTextColor={ dividerColor }
                            onChangeText={ (value) => onChange( value, 'phone' ) }
                            keyboardType='number-pad'
                        />
                </View>
                <View style={{ height: 100 }} />
                {/* </TouchableWithoutFeedback> */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 10,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25,
    },
});

