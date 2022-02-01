import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ( { uri, style }: Props ) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState( true );

    const  finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return(
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            {/* como es absolute resulta y pasa que si no se cambia va a superponerse un elemento al otro */}
            { isLoading && <ActivityIndicator style={{ position: 'absolute' }} color='orange' size={ 30 }/> }

            <Animated.Image
            source={{ uri }}
            onLoadEnd={ finishLoading }
            style={{
                ...style as any,
                // width: '100%',
                // height: 400,
                opacity
            }}
            />
        </View>
    )
};
