import React, {useState} from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import watering from '../assets/watering.png'
import colors from '../styles/colors';
import { Button } from '../components/Button'

export function Welcome (){
    //estado é a capacidade de controlar quando determinado componente deve ser recarregado
    const [visivel, setVisivel] = useState(false);

    function trocarVisibilidade(){
        setVisivel(true)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie{'\n'}suas plantas{'\n'}de forma fácil
            </Text>
            {
                visivel && <Image style={styles.img} source={watering} />
            }
            <Text style={styles.subTitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
            <Button title="Vamos lá" onPress={trocarVisibilidade}/>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 36,
        fontWeight: 'bold',
        textAlign:'center',
        //importando o arquivo de cores conforme arquivo
        color: colors.heading,
        marginTop:34
    },
    subTitle:{
        textAlign:'center',
        fontSize: 18,
        //utilizado para aproximar o conteudo ao meio
        paddingHorizontal:20,
        color: colors.heading
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
    },
    img:{
        height: 292,
        width:294
    },
    buttonText:{
        fontSize:20,
        color: colors.white,
        fontWeight: 'bold'
    }

})