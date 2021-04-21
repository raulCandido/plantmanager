import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
//Botao que aplica estilos especificos de cada plataforma android ou ios
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

interface EnviromentButtonProps extends RectButtonProps{
    title: string,
    //a interrogacao em frente ao atributo significa que a mesa nao é obrigatoria
    active?: boolean
    
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
    return (
        <RectButton
            style={styles.button}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </RectButton>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    button:{

    },
    text:{
        
    }
})