
import React, { useEffect, useState } from "react";
import {
   View,
   StyleSheet,
   TouchableOpacity,
   SafeAreaView,
   Text,
   Image,
   FlatList
} from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import waterdrop from "../assets/waterdrop.png";
import { loadPlantas, PlantsProps } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { getBottomSpace } from "react-native-iphone-x-helper";
import fonts from "../styles/fonts";
import { PlantCardSecundary } from "../components/PlantCardSecundary";
import { Load } from "../components/Load";

export function MyPlants() {
   const [myPlants, setMyplants] = useState<PlantsProps[]>([]);
   const [loading, setLoading] = useState(true);
   const [proximaIrrigada, setProximaIrrigada] = useState<string>();

   useEffect(() => {
      async function carregarPlantas() {
         const plantStorage = await loadPlantas();

         const nextTime = formatDistance(
            new Date(plantStorage[0].dateTimeNotification).getTime(),
            new Date().getTime(),
            { locale: pt }
         )

         setProximaIrrigada(
            `Não esqueça de regar a ${plantStorage[0].name} à ${nextTime}`
         )
         setMyplants(plantStorage)
         setLoading(false)
      }
      //carrega a funcao dentro do useEffect que carrega sempre que a page é aberta
      carregarPlantas()
      //vetor para carregar o objeto dentro dele sempre que ele for chamado
   }, [])

   if(loading)
      return <Load/>

   return (
      <View style={styles.container}>
         <Header />
         <View style={styles.spotlight}>
            <Image source={waterdrop} style={styles.spotlightImage} />
            <Text style={styles.spotlightText}>
               {proximaIrrigada}
            </Text>
         </View>


         <View style={styles.plants}>
         <Text style={styles.title}>Próximas regadas</Text>

            <FlatList
               data={myPlants}
               keyExtractor={(item) => String(item.id)}
               renderItem={({ item }) => (
                  <PlantCardSecundary
                     data={item}
                  />
               )}
               showsVerticalScrollIndicator={false}
               contentContainerStyle={{ flex: 1 }}
            />
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 30,
      paddingTop: 10,
      backgroundColor: colors.background,
   },
   spotlight: {
      backgroundColor: colors.blue_light,
      borderRadius: 20,
      paddingHorizontal: 10,
      marginRight: 30,
      marginLeft: 30,
      height: 88,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center"
   },
   spotlightImage: {
      width: 60,
      height: 60,
   },
   spotlightText: {
      color: colors.blue,
      paddingHorizontal: 10,
      textAlign: "justify"

   },
   plants: {
      flex: 1,
      width:'100%',
   },
   title: {
      marginVertical: 22,
      fontFamily: fonts.heading,
      fontSize: 24,
      color: colors.heading,
      lineHeight: 36,
   }
});
