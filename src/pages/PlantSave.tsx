import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Alert,
    Text,
    Image,
    ScrollView,
    Platform
} from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SvgFromUri } from 'react-native-svg'
//Responsavel por passar infos de uma tela para outra 
import { useRoute } from '@react-navigation/core';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import waterdrop from '../assets/waterdrop.png'
import { Button } from '../components/Button';

interface Params{

    plant:{
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
}

export function PlantSave() {

    const [selectDateTime, setSelectDateTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios')

    const route = useRoute()
    const { plant } = route.params as Params

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState => !oldState)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                />
                <Text style={styles.plantName}>
                    {plant.name}
                </Text>
                <Text style={styles.plantAbout}>
                    {plant.about}    
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipConteiner}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        culpa, in deleniti temp , in deleniti tempora excepturi in deleniti tempora excepturi
                    </Text>
                </View>
                <Text style={styles.alertLabel}>
                    Loredipisicing elit. Adipisci sit earum reiciendis magnam quasi culpa, in deleniti tempora excepturi
                </Text>
                <DateTimePicker
                    value={selectDateTime}
                    mode="time"
                    display="spinner"
                    onChange={handleChangeTime}
                    is24Hour={true}
                />
                <Button nome="Cadastrar planta"/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo:{
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape,
        marginBottom:30

    },
    plantName:{
        fontFamily: fonts.heading,
        fontSize:24,
        color: colors.heading,
        marginTop: 10
    },
    plantAbout:{
        textAlign: 'center',
        fontSize: 17,
        fontFamily: fonts.text,
        marginTop: 10
    },
    tipImage:{
        width: 56,
        height: 56
    },
    controller:{
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10,
        paddingBottom: getBottomSpace() || 30
    },
    tipConteiner:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60

    },
    tipText:{
        flex: 1,
        marginLeft: 5,
        color: colors.blue,
        textAlign: 'justify',
        fontSize: 15
    },
    alertLabel:{
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        marginBottom: 5
    }

})