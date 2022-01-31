import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

    return(
        <View style={ styles.contaienr }>
            <Animated.View  style={{
                ...styles.purpleBox,
                opacity,
                transform: [{
                    translateX: position
                }]

            }}/>

            <Button
                title='FadeIn'
                onPress={ () =>{
                    fadeIn();
                    startMovingPosition( 100 );
                } }
            />
            <Button
                title='FadeOut'
                onPress={ fadeOut }
            />
        </View>
    )
};


const styles = StyleSheet.create({
    contaienr:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height:150,
    }
});