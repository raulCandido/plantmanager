import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Text,
    Image,
    ScrollView,
    Platform
} from "react-native";

import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg"
//Responsavel por passar infos de uma tela para outra
import { useRoute } from "@react-navigation/core";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker"
import { isBefore, format } from "date-fns";
import { useNavigation } from "@react-navigation/native"

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import waterdrop from "../assets/waterdrop.png"
import { Button } from "../components/Button";
import { loadPlantas, PlantsProps, savePlant } from "../libs/storage";

interface Params {
    plant: PlantsProps
}

export function PlantSave() {

    const [selectDateTime, setSelectDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios")

    const route = useRoute()
    const { plant } = route.params as Params

    const navigation = useNavigation()

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === "android") {
            setShowDatePicker(oldState => !oldState)
        }
        if (dateTime && isBefore(dateTime, new Date)) {
            setSelectDateTime(new Date())
            return Alert.alert("Data invalida", "Escolha uma data no futuro")
        }
        if (dateTime) {
            setSelectDateTime(dateTime)
        }
    }

    function abrirDateTimePicker() {
        setShowDatePicker(oldState => !oldState)
    }
    async function handleSave() {
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectDateTime
            })
            navigation.navigate("Confirmation", {
                title: "Tudo certo",
                subTitle: "Fique tranquilo que sempre vamos \n lembrar você de cuidar da sua plantinha \n com bastante amor.",
                buttonTitle: "Muito Obrigado!",
                nextScreen: "MyPlants",
                icon: "hug"
            });

        } catch (error) {
            Alert.alert("Desculpe", "Não foi possivel salvar");
        }
    }

    return (
        //serve para telas menores permitindo que a tela realize um scroll para conter todoso os itens
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
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
                            {plant.water_tips}
                        </Text>
                    </View>
                    <Text style={styles.alertLabel}>
                        Selecione o melhor horário para o lembrete
                    </Text>
                    {
                        showDatePicker && (
                            <DateTimePicker
                                value={selectDateTime}
                                mode="time"
                                display="spinner"
                                onChange={handleChangeTime}
                                is24Hour={true}
                            />
                        )}
                    {
                        Platform.OS === "android" && (
                            <TouchableOpacity style={styles.dataTimerPickerButton}
                                onPress={abrirDateTimePicker}
                            >
                                <Text style={styles.dataTimerPicker}>
                                    {`Mudar ${format(selectDateTime, "HH:mm")}`}
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                    <Button
                        nome="Cadastrar planta"
                        onPress={handleSave}
                    />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.shape,
        marginBottom: 30

    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 10
    },
    plantAbout: {
        textAlign: "center",
        fontSize: 17,
        fontFamily: fonts.text,
        marginTop: 10
    },
    tipImage: {
        width: 56,
        height: 56
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10,
        paddingBottom: getBottomSpace() || 30
    },
    tipConteiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: "relative",
        bottom: 60

    },
    tipText: {
        flex: 1,
        marginLeft: 5,
        color: colors.blue,
        textAlign: "justify",
        fontSize: 15
    },
    alertLabel: {
        textAlign: "center",
        fontFamily: fonts.complement,
        color: colors.heading,
        marginBottom: 5
    },
    dataTimerPicker: {
        color: colors.heading,
        fontFamily: fonts.text,
        fontSize: 24
    },
    dataTimerPickerButton: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 20
    }

})