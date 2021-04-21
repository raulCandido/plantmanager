import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Button(){
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.font}>Confirmar</Text>
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