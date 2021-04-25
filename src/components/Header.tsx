import React, {useEffect, useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import img from '../assets/person.png'
import fonts from '../styles/fonts';
import apiFakeFace from '../services/apiFakeFace';

interface PersonProps{
    age: number,
    date_added: string,
    filename: string,
    gender: string,
    image_url: string,
    last_served: string,
    source: string

}

export function Header(){
    
    const [userName, setUserName] = useState<string>()
    const [person, setPerson] = useState<PersonProps>()

    async function loadPersonApi(){
        const { data } = await apiFakeFace.get('/face/json')
        setPerson(data)
    }

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setUserName(user || '')
        }
        loadStorageUserName()
    }, [])

    useEffect(() => {
        loadPersonApi()
    }, [])

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.comprimento}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <Image style={styles.img} source={{uri: person?.image_url}}></Image>
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