import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native';

import {Button} from '../components/Button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function Confirmation (){

    const navigation = useNavigation()

    function handlerPlantSelect() {
        navigation.navigate('PlantSelect')
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>🤗</Text>
                <Text style={styles.title}>Pronto!</Text>
                <Text style={styles.subTitle}>Agora vamos começar a cuidar das suas{'\n'} plantinhas com carinho.</Text>
                <View style={styles.footer}>
                    <Button nome="Começar" onPress={handlerPlantSelect}/>
                </View>
            </View>
     
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    content:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:20
    },
    emoji:{
        fontSize:44,
        marginBottom: 10

    },
    subTitle:{
        textAlign:'center',
        fontFamily: fonts.text,
        fontSize: 18,
        paddingVertical: 20,
        marginTop: 10
    },
    footer:{
        width: '100%',
        paddingHorizontal: 60
    }
})