import React, {useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    //Auxilia com que ao tentar digitar algo em um input o teclado se posicione corretamente na tela
    KeyboardAvoidingView,
    //Possibilita que o focus saia do input possibilitando melhor usabilidade e fechando o teclado
    TouchableWithoutFeedback,
    Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Keyboard } from 'react-native';



export function UserIdentification (){
    
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false)
    const [isFiled, setIsFiled] = useState(false)
    const [name, setName] = useState<string>()

    function handleSubmit(){
        navigation.navigate('Confirmation')
    }

    function handleInputBlur() {
        setIsFocused(false)
        //Valida para saber se tem conteudo no input, caso tenha deixa a cor verde no input
        setIsFiled(!!name)
    }
    function handleInputFocus() {
        setIsFocused(true)
    }
    function handleInputChange(value: string){
        //!!value transforma o value de string para Boleano,(se tem conteudo é verdadeiro senao tiver é falso)
        setIsFiled(!!value)
        setName(value)
    }


    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding': 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                {
                                    isFiled
                                        ? <Feather style={styles.icon} name="user-check" />
                                        : <Feather style={styles.icon} name="user" />
                                }
                                <Text style={styles.title}>Como podemos{'\n'} chamar você?</Text>
                            </View>
                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFiled) && { borderColor: colors.green}
                                ]}
                                placeholder="Digite o nome"
                                // quando o usuario sai do textInput
                                onBlur={handleInputBlur}
                                //quando o foco vai para o textInput
                                onFocus={handleInputFocus}
                                onChangeText = {handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button nome="Confirmar" onPress={handleSubmit}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
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