import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../styles/colors';
import img from '../assets/person.png'
import fonts from '../styles/fonts';

export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.comprimento}>Olá,</Text>
                <Text style={styles.userName}>Raul Cândido</Text>
            </View>
            <Image style={styles.img} source={img}></Image>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        //Por padrao o flex do react coloca os componentes um embaixo do outro, ao selecionar como 'row' ele passa a colocar do lado
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:10,
        marginTop: getStatusBarHeight()
    },
    comprimento:{
        fontFamily: fonts.text,
        fontSize: 32,
        color: colors.heading

    },
    userName:{
        fontFamily: fonts.heading,
        fontSize: 32,
        color: colors.heading,
        lineHeight: 36
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: colors.heading
        
    }

})