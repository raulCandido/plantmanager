
import React, { useEffect, useState } from "react";
import {
   View,
   StyleSheet,
   TouchableOpacity,
   SafeAreaView,
   Text,
   Image,
} from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import waterdrop from "../assets/waterdrop.png";
import { loadPlantas, PlantsProps } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

export function MyPlants() {
   const [] = useState<PlantsProps[]>([]);
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
         );
      }
      //carrega a funcao dentro do useEffect que carrega sempre que a page é aberta
      carregarPlantas()
      //vetor para carregar o objeto dentro dele sempre que ele for chamado
   },[])

   return (
      <View style={styles.container}>
         <Header />
         <View style={styles.spotlight}>
            <Image source={waterdrop} />
            <Text style={styles.spotlightText}>Texto regada</Text>
         </View>
         <View style={styles.plants}>
            <Text>{proximaIrrigada}</Text>
         </View>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.background,
      paddingHorizontal: 25,
   },
   header: {
      paddingHorizontal: 25,
      marginTop: 5,
   },
   spotlight: {},
   spotlightText: {},
   plants: {},
});
