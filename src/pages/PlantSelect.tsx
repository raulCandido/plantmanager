import React,{useState} from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    //objeto para reenderizar listas na tela
    FlatList
} from 'react-native';
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton';
import { useEffect } from 'react';
import api from '../services/api';

interface EnviromentProps {
    key: string
    title: string
}

export function PlantSelect (){
    
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])

    //Carrega antes que toda tela seja montada
    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments')
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ])
        }
        fetchEnviroment()
    }, [])


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
                <FlatList
                    data={enviroments}

                    renderItem={({ item }) => (
                        <EnviromentButton title={item.title} active />
                    )}
                    //propridade que coloca os itens na horizontal
                    horizontal
                    //Sumiu com a barra de scroll horizontal
                    showsHorizontalScrollIndicator={false}
                    //forma que se passa styles para propriedades do flatList
                    contentContainerStyle={styles.EnviromentList}
                />
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
    },
    EnviromentList:{
       height:45,
       justifyContent: 'center',
       paddingBottom: 5,
       marginLeft: 32,
       marginVertical: 32
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