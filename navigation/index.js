import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import CoinDetailedScreen from '../Screens/CoinDetailedScreen';
import ExchangesScreen from '../Screens/ExchangesScreen';
import SectorsScreen from '../Screens/SectorsScreen';

const Navigation = () => {

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home' 
                    component = {HomeScreen} 
                    options={{
                        title: 'Cryptoassets',
                        headerShown: false
                    }} 
                />
                <Stack.Screen name='Details' component = {CoinDetailedScreen} options={{headerShown: false}}  />
                <Stack.Screen name='Exchanges' component = {ExchangesScreen} />
                <Stack.Screen name='Sectors' component = {SectorsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
