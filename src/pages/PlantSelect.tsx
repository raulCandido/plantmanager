import React from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton';

export function PlantSelect (){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header/>
                <Text style={styles.title}>
                   Em qual hambiente
                </Text>
                <Text style={styles.subTitle}>
                   você quer colocar sua planta?
                </Text>
            </View>
            <View style={styles.headerListButton}>
                <EnviromentButton style={styles.button} title="esse é o botao"></EnviromentButton>
                <EnviromentButton style={styles.button} title="esse é o botao"></EnviromentButton>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
        
    },
    header:{
        justifyContent: 'space-between',
        paddingHorizontal:25,
        marginTop: 15
    },
    headerListButton:{ 
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.red,
        padding: 10,
        paddingLeft: 25
    },
    button:{
        backgroundColor: colors.blue_light,
        padding:10,
        borderRadius: 10,
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 25,
        marginRight: 10
    },
    title:{
        fontSize:16,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    subTitle:{
        fontSize:16,
        fontFamily: fonts.text,
        color: colors.heading
    }

})