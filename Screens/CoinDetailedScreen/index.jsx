import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { View, Text, SafeAreaView, Pressable, Image } from 'react-native'
import Styles from './styles';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import DetailsHeader from '../../Components/DetailsHeader';
import DetailsHeaderMinor from '../../Components/DetailsHeaderMinor';

const CoinDetailedScreen = () => {

    const route = useRoute();

    const item = route?.params?.item;
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }


    return (
        <SafeAreaView style = {Styles.page}>
            <DetailsHeader item = {item} navigation={navigation} />
            <DetailsHeaderMinor item = {item} navigation={navigation} />
        </SafeAreaView>
    )
}

export default CoinDetailedScreen;
