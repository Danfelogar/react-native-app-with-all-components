import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/ThemeContext';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    // const { colors } = useTheme();
    const { theme:{ colors } } = useContext( ThemeContext );

    return (
        // control para navegara  en todas las vistas
        <TouchableOpacity activeOpacity={ 0.8 } onPress={()=> navigation.navigate( menuItem.component as any )}>
            <View style={ styles.container }>
                <Icon
                    name={ menuItem.icon }
                    color={ colors.primary }
                    size={23}
                />
                <Text style={{ ...styles.itemText, color: colors.text }}>{ menuItem.name }</Text>

                <View style={ styles.iconEnd }/>
                    <Icon
                        name='chevron-forward-outline'
                        color={ colors.primary }
                        size={23}
                    />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    },
    iconEnd: {
        flex: 1,
    }
})
