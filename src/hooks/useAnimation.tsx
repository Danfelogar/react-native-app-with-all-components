import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const opacity = useRef( new Animated.Value(0.4)).current;
    const position = useRef( new Animated.Value(0)).current;

    const fadeIn = ( duration: number = 300 ) => {
        //esta en especifico nos permite tirar una animacion con tiempo
        Animated.timing(
            //hacemos referencia a la opacidad creada
            opacity,
            //definimos el tipo de animacion
            {
                toValue: 1,
                duration,
                //acelerar animacion por hardware
                useNativeDriver: true,
            }
        ).start();
        // ).start( () => console.log('animacion termino'));
    }

    const fadeOut = () => {
        //esta en especifico nos permite tirar una animacion con tiempo
        Animated.timing(
            //hacemos referencia a la opacidad creada
            opacity,
            //definimos el tipo de animacion
            {
                toValue: 0,
                duration: 300,
                //acelerar animacion por hardware
                useNativeDriver: true,
            }
        ).start();
    }

    const startMovingPosition = ( initPosition: number = - 100, duration: number = 300 ) =>{
        //se recetea para que siempre empice en la posion que le digo y termine en la inicial
        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
                // easing: Easing.bounce,
            }
        ).start();
    }



    return{
        opacity,
        position,

        fadeIn,
        fadeOut,
        startMovingPosition
    }
};
