import React, {useState} from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    //compomente para posibilitar pegar tamanho da tela
    Dimensions,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons'

import watering from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';

export function Welcome (){
    //estado é a capacidade de controlar quando determinado componente deve ser recarregado
    // objeto para realizar navegacao entre as telas
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie{'\n'}suas plantas de{'\n'} forma fácil
                </Text>
                <Image style={styles.img} resizeMode="contain" source={watering} />
                <Text style={styles.subTitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
                </Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart}>
                    <Feather style={styles.buttonIcon} name="chevron-right"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal:20
    },
    title:{
        fontSize: 36,
        fontWeight: 'bold',
        textAlign:'center',
        //importando o arquivo de cores conforme arquivo
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop:34
    },
    subTitle:{
        textAlign:'center',
        fontSize: 18,
        //utilizado para aproximar o conteudo ao meio
        paddingHorizontal:20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    img:{
        //calcura a largura que a imagem deve ocupar
        height: Dimensions.get('window').width * 0.7,
    },
    button:{
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom:10,
        height: 56,
        width:56,
        fontSize: 18
    },
    buttonIcon:{
        fontSize:24,
        color: colors.white
    }

})