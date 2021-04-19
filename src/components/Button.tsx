import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText:{
        fontSize:20,
        color: colors.white,
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom:10,
        height: 56,
        paddingHorizontal: 5,
        fontSize: 18
    }
})