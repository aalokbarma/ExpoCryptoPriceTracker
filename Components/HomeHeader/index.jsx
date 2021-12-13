import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView, FlatList, TextInput } from 'react-native';
import Styles from './styles';
import { EvilIcons, Entypo } from '@expo/vector-icons'; 
import HomeFilters from '../HomeFilters';
import cryptoCurrencies from '../../assets/data/cryptocurrencies.json';

const HomeHeader = ({navigation, filteredCryptos, setFilteredCryptos}) => {

    const [headerMainDisplay, setHeaderMainDisplay] = useState('flex');
    const [searchDisplay, setSearchDisplay] = useState('none');
    const [searchCrypto, setSearchCrypto] = useState('');

    const filters = ['All' ,'*', 'My Watchlist', 'Price Low to High', 'Price High to Low', 'Sort By % Change', 'Sort By Market Cap', 'Coins in Loss', 'Coins in Profit'];


    const onExchangesClick = () => {
        navigation.navigate('Exchanges');
    }
    const onSectorsClick = () => {
        navigation.navigate('Sectors');
    }

    const onSearchIconPress = () => {
        setHeaderMainDisplay('none');
    }
    const onCrossButtonPress = () => {
        setHeaderMainDisplay('flex');
        setSearchCrypto('');
    }

    useEffect(() => {
        const newCryptos = cryptoCurrencies.filter( crypto => crypto.name.toLowerCase().includes(searchCrypto.toLowerCase()) );
        setFilteredCryptos(newCryptos);
    }, [searchCrypto])

    return (
        <View style = {Styles.headerSection}>
            <View style = {Styles.homeHeaderComponent}>
                <View style = {Styles.headerLeftSection}>
                    <Text style = {Styles.headingMain}>Cryptoassets</Text>
                    {
                        headerMainDisplay === 'flex' 
                        ?
                        <View style = {Styles.buttonsMinorSection}>
                            <Pressable onPress={onExchangesClick}>
                                <Text style = {Styles.headingMinor}>
                                    Exchanges
                                </Text>
                            </Pressable>
                            <Pressable onPress={onSectorsClick}>
                                <Text style = {Styles.headingMinor}>
                                    Sectors
                                </Text>
                            </Pressable>
                        </View>
                        :
                        <View style = {Styles.searchBarContainer}>
                            <TextInput
                                style = {Styles.searchbar}
                                placeholder = "Search Crypto"
                                value = {searchCrypto}
                                onChangeText={setSearchCrypto}
                                placeholderTextColor={'#999'}
                                underlineColorAndroid={'#4f4f60'}
                            />
                        </View>
                    }
                </View>
                    
                    {
                        headerMainDisplay === "flex" ?
                        <Pressable onPress={onSearchIconPress} style ={Styles.searchIcon}>
                            <EvilIcons name="search" size={28} color="#555" />
                        </Pressable> 
                        :
                        <Pressable onPress={onCrossButtonPress} style ={Styles.searchIcon}>
                            <Entypo name="cross" size={28} color="#f00" />
                        </Pressable>
                    }
            </View>

            <FlatList
                style = {Styles.filtersFlatlist}
                data = {filters}
                renderItem={(item) => <HomeFilters item = {item} filteredCryptos = {filteredCryptos} setFilteredCryptos = {setFilteredCryptos} />}
                horizontal
            />
        </View>
    )
}

export default HomeHeader;
