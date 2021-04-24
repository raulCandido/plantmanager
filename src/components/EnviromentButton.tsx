import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
//Botao que aplica estilos especificos de cada plataforma android ou ios
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps{
    title: string,
    //a interrogacao em frente ao atributo significa que a mesa nao é obrigatoria
    active?: boolean
    
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
    return (
        <RectButton
            style={[
                styles.container,
                //se active for true altra o estilo
                active && styles.containerActive
            ]}
            {...rest}
        >
            <Text style={[
                styles.text,
                active && styles.textActive
            ]}
            >
                {title}
            </Text>
        </RectButton>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 3
    },
    containerActive: {
        backgroundColor: colors.green_light,
    }, 
    text:{
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.heading,
    }
})