import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps{
   nome: string
}

//passando parametros com props
export function Button({nome, ...rest}: ButtonProps) {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.font}
            // O objeto de rest que vem da interface "TouchableOpacityProps" sempre deve ser o ultimo comando chamado
            {...rest}
            >
                {nome}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height:56,
        
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    font:{
        fontSize:14,
        fontFamily: fonts.heading,
        color: colors.white
    }

})