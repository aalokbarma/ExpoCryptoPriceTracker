import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Styles from './styles';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';

const DetailsHeader = ({item, navigation}) => {

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View style = {Styles.headerRow}>
                <Pressable onPress={onBack}>
                    <MaterialIcons style = {Styles.backButton} name="keyboard-arrow-left" size={30} color="#999" />
                </Pressable>
                <View style = {Styles.coinDetails}>
                    <Image source={{uri: item.item.image}} style = {Styles.image}/>
                    <Text style = {Styles.coinSymbol}>{item.item.symbol}</Text>
                    <Text style = {Styles.ranking}>#{item.item.market_cap_rank}</Text>
                </View>
                <View style = {Styles.iconsContainer}>
                    <Pressable>
                        <EvilIcons name="user" size={30} color="#999" />
                    </Pressable>
                </View>
            </View>
    )
}

export default DetailsHeader;
