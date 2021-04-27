import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    //objeto para reenderizar listas na tela
    FlatList,
    ActivityIndicator
} from 'react-native';

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton';
import api from '../services/api';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load'
import { useNavigation } from '@react-navigation/native';

interface EnviromentProps {
    key: string
    title: string
}
interface PlantsProps {
    id: string,
    name: string
    about: string
    water_tips: string
    photo: string
    environments: [string],
    frequency: {
        times: number
        repeat_every: string
    }
}

export function PlantSelect() {

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])
    const [plants, setPlants] = useState<PlantsProps[]>([])
    //estado para auxiliar no consumo da API (trazendo toda informacao para o app evitando que o mesmo faça consulta varias vezes)
    const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([])
    const [enviromentSelect, setEnviromentSelect] = useState('all')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation();

    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)

    function selectGroupPlant(plantKey: string) {
        setEnviromentSelect(plantKey)
        if (plantKey == 'all')
            return setFilteredPlants(plants)
        const filtered = plants.filter(plant => plant.environments.includes(plantKey)
        )
        setFilteredPlants(filtered)
    }

    function navegarParaPlantSave(plant: PlantsProps){
        navigation.navigate('PlantSave', {plant})
    }

    async function carregarPlantas() {
        //a API json-server permite que os parametros passados no get sejam alterados
        // no caso tem comandos como _sort, _order _limit e etc verificar api*
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)
        //usando inferencia de bool do javaScript que permite verificar se objeto esta vazio
        if (!data)
            return setLoading(true)
        if (page > 1) {
            setPlants(dadosCarregadosInicialmente => [...dadosCarregadosInicialmente, ...data])
            setFilteredPlants(dadosCarregadosInicialmente => [...dadosCarregadosInicialmente, ...data])
        } else {
            setPlants(data)
            setFilteredPlants(data)
        }
        setLoading(false)
        setLoadingMore(false)
    }
    
    function carregarComScrolldeTela(distancia: number) {
        if(distancia < 1)
            return;
        setLoadingMore(true)
        setPage(valorAntigo => valorAntigo + 1)
        carregarPlantas()
    }

    //Carrega antes que toda tela seja montada
    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc')
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

    useEffect(() => { carregarPlantas() }, [])

    if (loading) return <Load />

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>
                    Em qual hambiente
                </Text>
                <Text style={styles.subTitle}>
                    você quer colocar sua planta?
                </Text>
            </View>
            <View>
                <FlatList
                    data={enviroments}
                    //ganho de performance é padrao que todos os itens de uma lista tenham id o keyExtractor serve para isso
                    keyExtractor = {(item) => String(item.key)}
                    renderItem={({ item }) => (
                        <EnviromentButton title={item.title}
                            active={item.key === enviromentSelect}
                            onPress={() => selectGroupPlant(item.key)}
                        />
                    )}
                    //propridade que coloca os itens na horizontal
                    horizontal
                    //Sumiu com a barra de scroll horizontal
                    showsHorizontalScrollIndicator={false}
                    //forma que se passa styles para propriedades do flatList
                    contentContainerStyle={styles.EnviromentList}
                />
            </View>
            <View style={styles.plants}>
                <FlatList
                    data={filteredPlants}
                    keyExtractor={(item)=> String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardPrimary data={item}
                        onPress={() => navegarParaPlantSave(item)}/>
                        )}

                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    //funcao para iniciar uma tarefa quando chegar a determinada distancia do final da tela o valor 0.1 representa 10%
                    onEndReachedThreshold={0.1}
                    onEndReached={({distanceFromEnd }) =>
                        carregarComScrolldeTela(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore
                            ? <ActivityIndicator color={colors.green}/>
                            : <></>
                    }
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
    },
    header: {
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginTop: 5
    },
    EnviromentList: {
        height: 45,
        justifyContent: 'center',
        paddingBottom: 2,
        marginLeft: 32,
        marginVertical: 32
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.heading
    },
})


