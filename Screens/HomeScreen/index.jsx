import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView, Image } from 'react-native'
import Styles from './styles';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';
import CurrencyRow from '../../Components/CurrencyRow';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../Components/HomeHeader';
import oops from '../../assets/Images/oops.png';


const HomeScreen = () => {

    const [searchFilteredCryptos, setSearchFilteredCryptos] = useState(cryptocurrencies);

    // console.log(cryptocurrencies);
    const navigation = useNavigation();
    // console.log(searchFilteredCryptos.length);

    return (
        <SafeAreaView style = {Styles.page}>
            <HomeHeader navigation = {navigation} filteredCryptos = {searchFilteredCryptos} setFilteredCryptos = {setSearchFilteredCryptos} />
            {
                searchFilteredCryptos.length == 0
                ?
                <View style = {Styles.nothingContainer}>
                    <Image source={oops} style = {Styles.oopsImage} />
                    <Text style = {Styles.nothingText}>Oops!! There is nothing to show.</Text> 
                </View>
                 :
                <FlatList
                    data={searchFilteredCryptos}
                    renderItem={(item) => <CurrencyRow item = {item} navigation = {navigation} />}
                    ItemSeparatorComponent={() => <View style = {Styles.separator} />}
                />
            }
        </SafeAreaView>
    )
}

export default HomeScreen;
