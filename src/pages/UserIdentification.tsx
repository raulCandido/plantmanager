import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    //Auxilia com que ao tentar digitar algo em um input o teclado se posicione corretamente na tela
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function UserIdentification (){
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding': 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Feather style={styles.icon} name="user-check"/>
                            <Text style={styles.title}>Como podemos{'\n'} chamar você?</Text>
                        </View>
                        <TextInput style={styles.input} placeholder="Digite o nome"/>
                        <View style={styles.footer}>
                            <Button/>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        width:'100%',
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal:54,
        alignItems: 'center'
    },
    icon:{
        fontSize: 44
    },
    input:{
        borderBottomWidth:1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 20,
        marginTop: 20,
        padding: 10,
        textAlign:'center',
    },
    title:{
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight:32,
        fontSize: 22,
        textAlign: 'center',
        marginTop:20
    },
    footer:{
        width: '100%',
        marginTop:15,
        paddingHorizontal:15
    },
    header:{
        alignItems: 'center'
    }
})