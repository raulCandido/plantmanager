import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    View,
    Text
} from 'react-native';
import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';

const appTab = createBottomTabNavigator()

const AuthRoutes = () =>{
    return (
        <appTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: 20,
                    height: 88
                }
            }}>
                {/* Criando as rotas */}
                <appTab.Screen
                    name="Nova Planta"
                    component={PlantSelect}
                    options={{
                        tabBarIcon: (({ size, color })=>(
                            
                        ))
                    }}
                />
        </appTab.Navigator>
    )
}