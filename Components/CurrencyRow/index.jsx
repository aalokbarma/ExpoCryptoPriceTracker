import React, { useEffect, useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import Styles from './styles';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';






const CurrencyRow = ({item, navigation}) => {

    const [marketCap, setMarketCap] = useState(parseInt(item.item.market_cap));
    const [newMarketCap, setNewMarketCap] = useState('');
    const [mcUnit, setMcUnit] = useState('T');

    const [percentageChange, setPercentageChange] = useState(item.item.price_change_percentage_24h.toFixed(2))

    const [currentPrice, setCurrentPrice] = useState(parseFloat(item.item.current_price.toFixed(2)));

    const [color, setColor] = useState('#0f0');
    const [arrowIcon, setArrowIcon] = useState("arrow-drop-up")

    // console.log(currentPrice.toFixed(2));

    
    // console.log(newMarketCap);

    useEffect(() => {
        if (marketCap >= 1000000000000){
            let minorMarketCap = marketCap / 1000000000000
            setNewMarketCap(minorMarketCap.toFixed(3))
            setMcUnit('T')
        } else if (marketCap >= 1000000000){
            let minorMarketCap = marketCap / 1000000000
            setNewMarketCap(minorMarketCap.toFixed(3))
            setMcUnit('B')
        }
        else if (marketCap >= 1000000){
            let minorMarketCap = marketCap / 1000000
            setNewMarketCap(minorMarketCap.toFixed(3))
            setMcUnit('M')
        }
        else if (marketCap >= 1000){
            let minorMarketCap = marketCap / 1000
            setNewMarketCap(minorMarketCap.toFixed(3))
            setMcUnit('K')
        }
        else{
            setNewMarketCap(marketCap);
            setMcUnit('$')
        }
    }, []);

    useEffect(() => {
        if(percentageChange < 0) {
            setColor('#f00');
            setArrowIcon('arrow-drop-down')
        } else if (percentageChange > 0) {
            setColor('#0f0');
            setArrowIcon('arrow-drop-up')
        } else {
            setColor('#555');
        }
    }, [])

    const onNavigate = () => {
        navigation.navigate('Details', {item});
    };



    // console.log(item.index);
    return (
        <Pressable onPress={onNavigate} style = {Styles.mainRow}>
            <View style = {Styles.leftSection}>
                <Image source={{uri: item.item.image}} style = {Styles.image} />
                <View style = {Styles.nameColumn}>
                    <Text style = {Styles.name}>{item.item.name}</Text>
                    <View style = {Styles.priceChangeRow}>
                        {/* <MaterialCommunityIcons style = {Styles.ranking} name= {`numeric-${item.index}-box`} size={20} color="#555" /> */}
                        <Text style = {Styles.ranking}>{item.item.market_cap_rank}</Text>
                        <Text style = {Styles.currCode}>{item.item.symbol}</Text>
                        <MaterialIcons style = {Styles.upArrow} name = {arrowIcon} size={28} color={color} />
                        <Text style = {[Styles.priceChange, {color: color}]}>{percentageChange}%</Text>
                    </View>
                </View>
            </View>
            <View style = {Styles.graphSection}>
                <Text style = {Styles.graphText}>~Graph~</Text>
            </View>
            <View style = {Styles.rightSection}>
                <View style = {Styles.marketCap}>
                    <Text style = {Styles.name}>{currentPrice}</Text>
                    <Text style = {Styles.currCode}>MCap {newMarketCap} {mcUnit}</Text>
                    {/* Price Value */}
                    {/* Total Market Cap */}
                </View>
            </View>
        </Pressable>
    )
}

export default CurrencyRow;
