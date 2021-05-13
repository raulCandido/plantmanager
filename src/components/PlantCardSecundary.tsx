import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { SvgFromUri } from "react-native-svg";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantProps extends RectButtonProps {
   data: {
      name: string
      photo: string
      hour: string
   }
}

export const PlantCardSecundary = ({ data, ...rest }: PlantProps) => {
   return (
      <Swipeable
         overshootRight={false}
         renderRightActions={()=>(
            
         )}
      >
         <RectButton style={styles.container} {...rest}>
            <SvgFromUri uri={data.photo} width={50} height={50} />
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.hourDetails}>
               <Text style={styles.labelRegar}>Regar às</Text>
               <Text style={styles.hour}>{data.hour}</Text>
            </View>
         </RectButton>
      </Swipeable>
   )
}
const styles = StyleSheet.create({
   container: {
      width: "100%",
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 15,
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 5,
      backgroundColor: colors.shape,
      
   },
   name: {
      flex: 1,
      color: colors.green_dark,
      fontFamily: fonts.heading,
   },
   labelRegar:{
      color: colors.heading
   },
   hourDetails:{
     alignItems: "flex-end" 
   },
   hour:{
      color: colors.heading
    }
})
