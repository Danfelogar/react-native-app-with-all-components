import React, { useContext, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/ThemeContext';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    const { theme:{ colors } } = useContext( ThemeContext );

    return(
        <View style={ styles.gobalMargin }>
            <HeaderTitle title='Modal Screen' />

            <Button
                title='Abrir modal'
                onPress={ () => {setIsVisible(true)} }
            />

            <Modal
                animationType='fade'
                visible={ isVisible }
                transparent={ true }
            >
                {/* background negro */}
                <View style={{
                    flex: 1,
                    // height: 100,
                    // width: 100,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {/* contenido del modal */}
                    <View style={{
                        backgroundColor: colors.primary,
                        height: 300,
                        width: 300,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                    }}>
                        <HeaderTitle title='Modal' />
                        <Text style={{ fontSize: 20, fontWeight: '300' }}>Cuerpo del modal</Text>
                        <Button
                            title='Cerrar'
                            onPress={() => setIsVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
};
