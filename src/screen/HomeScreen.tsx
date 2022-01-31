import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItem } from '../data/menuItens';
import { HeaderTitle } from '../components/HeaderTitle';



export const HomeScreen = () => {

    const itemSeparator = () => {
        return(
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8,
                }}
            />
        )
    }

    return(
        <View style={{flex: 1, ...styles.gobalMargin}}>

            <FlatList
                data={ menuItem }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ <HeaderTitle title='Opciones de menú'/> }
                ItemSeparatorComponent={ itemSeparator }
            />
        </View>
    )
};