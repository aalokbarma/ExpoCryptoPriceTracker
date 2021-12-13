import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Styles from './styles';
import { Entypo } from '@expo/vector-icons'; 
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';

const HomeFilters = ({item, filteredCryptos, setFilteredCryptos}) => {

    const [filterPressed, setFilterPress] = useState('all');
    // const [pricedAsc, setPricedAsc] = useState([]);
    // const [pricedDes, setPricedDes] = useState([]);

    const onFilterPress = () => {
        if(item.item == "*"){
            setFilterPress('favorites')
        } else{
            setFilterPress(item.item);
        }
    };

    const priceAsc = (cryptos) => {
        const newCryptos = cryptos.sort(function(a,b){
            return a.current_price - b.current_price
        })
        setFilteredCryptos(newCryptos);
    };
    const priceDes = (cryptos) => {
        const newCryptos = cryptos.sort(function(a,b){
            return b.current_price - a.current_price
        })
        setFilteredCryptos(newCryptos);
    };
    const percentAsc = (cryptos) => {
        const newCryptos = cryptos.sort(function(a,b){
            return b.price_change_percentage_24h - a.price_change_percentage_24h
        })
        setFilteredCryptos(newCryptos);
    }
    const marketCapDes = (cryptos) => {
        const newCryptos = cryptos.sort(function(a,b){
            return b.market_cap - a.market_cap
        })
        setFilteredCryptos(newCryptos);
    }

    useEffect(() => {
        setFilterPress('all');
        if(filterPressed == 'all'){
            setFilteredCryptos(filteredCryptos);
        } 
        else if (filterPressed == 'All'){
            setFilteredCryptos(cryptocurrencies);
        } 
        else if (filterPressed == 'favorites'){
            const newcryptos = cryptocurrencies.filter(cryptos => cryptos.favorite === "true")
            setFilteredCryptos(newcryptos);
        } 
        else if (filterPressed == 'My Watchlist'){
            const newcryptos = cryptocurrencies.filter(cryptos => cryptos.my_watchlist === "true")
            setFilteredCryptos(newcryptos);
        } 
        else if (filterPressed == 'Price Low to High'){
            priceAsc(cryptocurrencies);
        } 
        else if (filterPressed == 'Price High to Low'){
            priceDes(cryptocurrencies);
        } 
        else if (filterPressed == 'Sort By % Change'){
            percentAsc(cryptocurrencies);
        } 
        else if (filterPressed == 'Sort By Market Cap'){
            marketCapDes(cryptocurrencies);
        } 
        else if (filterPressed == 'Coins in Loss'){
            const newcryptos = cryptocurrencies.filter(cryptos => cryptos.price_change_percentage_24h < 0)
            setFilteredCryptos(newcryptos);
            
        } 
        else if (filterPressed == 'Coins in Profit'){
            const newcryptos = cryptocurrencies.filter(cryptos => cryptos.price_change_percentage_24h > 0)
            setFilteredCryptos(newcryptos);
        } 
        else{
            setFilteredCryptos(cryptocurrencies);
        }
        // setPricedAsc([])
        // setPricedDes([])
    }, [filterPressed])

    // console.log(item);
    return (
        <View style = {Styles.filterContainer}>
        {
            item.item === "*" ? 
            <Pressable onPress={onFilterPress}>
                <Entypo style ={Styles.starIcon} name="star-outlined" size={20} color="#555" />  
            </Pressable> :
            <Pressable onPress={onFilterPress}>
                <Text style ={Styles.filters}>{item.item}</Text>
            </Pressable>
        }
        </View>
    )
}

export default HomeFilters;
