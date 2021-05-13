import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//styles
import colors from "../styles/colors";
//telas
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSave } from "../pages/PlantSave";
import { MyPlants } from "../pages/MyPlants";
import AuthRoutes from "./tab.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
   // pilha de navegacao (definindo algumas propriedades como: cor branca de fundo)
   <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
         cardStyle: {
            backgroundColor: colors.white,
         },
      }}
   >
      {/* tela que sera aberta  primeiro é a que vier primeiro */}
      <stackRoutes.Screen name="Welcome" component={Welcome} />
      <stackRoutes.Screen
         name="UserIdentification"
         component={UserIdentification}
      />
      <stackRoutes.Screen name="Confirmation" component={Confirmation} />
      <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
      <stackRoutes.Screen name="PlantSave" component={PlantSave} />
      <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
   </stackRoutes.Navigator>
);

export default AppRoutes;
