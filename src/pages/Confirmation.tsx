import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Params {
   icon: "smile" | "hug";
   title: string;
   subTitle: string;
   buttonTitle: string;
   nextScreen: string;
}

const emojis = {
   hug: "🤗",
   smile: "😁",
};

export function Confirmation() {
   const navigation = useNavigation();
   const routes = useRoute();

   const {
      title,
      subTitle,
      buttonTitle,
      icon,
      nextScreen,
   } = routes.params as Params;

   function handlerPlantSelect() {
      navigation.navigate(nextScreen);
   }

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.content}>
            <Text style={styles.emoji}>
               {emojis[icon]}
            </Text>
            <Text style={styles.title}>
               {title}
            </Text>
            <Text style={styles.subTitle}>
               {subTitle}
            </Text>
            <View style={styles.footer}>
               <Button nome={buttonTitle}  onPress={handlerPlantSelect} />
            </View>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
   },
   title: {
      fontSize: 22,
      fontFamily: fonts.heading,
      color: colors.heading,
   },
   content: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
   },
   emoji: {
      fontSize: 44,
      marginBottom: 10,
   },
   subTitle: {
      textAlign: "center",
      fontFamily: fonts.text,
      fontSize: 18,
      paddingVertical: 20,
      marginTop: 10,
   },
   footer: {
      width: "100%",
      paddingHorizontal: 60,
   },
});
