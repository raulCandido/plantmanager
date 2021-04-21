import React from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect (){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Ola Mundo
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.background
    },
    content:{
        justifyContent: 'center'
    },
    title:{
        fontSize:40
    }

})