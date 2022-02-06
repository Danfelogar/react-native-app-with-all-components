import React, { useContext, useState } from 'react';
import { ScrollView, View, RefreshControl, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/ThemeContext';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const { theme:{ colors, dividerColor ,dark } } = useContext( ThemeContext );

    const { top } = useSafeAreaInsets();

    const [refreshing, setRefreshing] = useState(false);

    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() =>{
            console.log('Terminamos');
            setRefreshing(false)
        }, 1500);
    }

    return(
        <ScrollView
            // alternativa para que se vea el refresh en ios
            style={{ marginTop: refreshing ? top : 0 }}
            refreshControl={
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    // que tan abajo quiero el refresh
                    progressViewOffset={ 10 }
                    progressBackgroundColor={ dividerColor }
                    colors={['white','red','orange']}
                    // esto es para ios
                    // style={{ backgroundColor: '#5856D6' }}
                    tintColor={ dark ? 'white' : 'black' }
                    title='refreshing'
                    titleColor='white'
                />
            }
        >
            <View style={ styles.gobalMargin }>
                <HeaderTitle title='Pull To Refresh' />
                {
                    data && <HeaderTitle title={ data } />
                }
            </View>
        </ScrollView>
    )
};
