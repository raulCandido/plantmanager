import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    View,
    Text
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';

const appTab = createBottomTabNavigator()

const AuthRoutes = () => {
    return (
        <appTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    //paddingVertical: 25,
                    height: 60,
                    
                }
            }}>
            {/* Criando as rotas */}
            <appTab.Screen
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <appTab.Screen
                name="Minhas Planta"
                component={MyPlants}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </appTab.Navigator>
    )
}

export default AuthRoutes