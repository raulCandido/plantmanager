import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantProps extends RectButtonProps {
   data: {
      name: string;
      photo: string;
   };
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
   return (
      <RectButton style={styles.container} {...rest}>
         <SvgFromUri uri={data.photo} width={50} height={50} />
         <Text style={styles.text}>{data.name}</Text>
      </RectButton>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      maxWidth: "50%",
      paddingVertical: 32,
      alignItems: "center",
      margin: 5,
      backgroundColor: colors.shape,
      borderRadius: 15,
   },
   text: {
      color: colors.green_dark,
      fontFamily: fonts.heading,
   },
});
