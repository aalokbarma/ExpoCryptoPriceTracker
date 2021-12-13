import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';

const DetailsHeaderMinor = ({item, navigation}) => {
    const [changesColor, setChangesColor] = useState('#fc1a1e');

    useEffect(() => {
        if(item.item.price_change_percentage_24h < 0 ){
            setChangesColor('#fc1a1e');
        } else if(item.item.price_change_percentage_24h > 0 ){
            setChangesColor('#20f025');
        }
    }, [])
    // console.log(item);
    return (
        <View style = {Styles.headerMinor}>
            <View style = {Styles.leftSection}>
                <Text style ={Styles.name}>{item.item.name}</Text>
                <Text style ={Styles.price}>{item.item.current_price.toFixed(2)} US$</Text>
            </View>
            <View style = {Styles.rightSection}>
                <View style = {[Styles.priceChangeContainer, {backgroundColor: changesColor}]}>
                    {
                        item.item.price_change_percentage_24h < 0 
                            ? 
                        <MaterialIcons style = {Styles.dropArrow} name="arrow-drop-down" size={28} color="white" /> 
                            : 
                        <MaterialIcons style = {Styles.dropArrow} name="arrow-drop-up" size={28} color="white" />
                    }
                    {/* <MaterialIcons style = {Styles.dropArrow} name="arrow-drop-down" size={24} color="white" /> */}
                    <Text style = {Styles.priceChangeValue}>
                        {item.item.price_change_percentage_24h.toFixed(2)} %
                    </Text>
                </View>
            </View>
            {/* Left Section */}
            {/* name */}
            {/* price */}
            {/* Right Section */}
            {/* Price Container */}
            {/* Price Value */}
        </View>
    )
}

export default DetailsHeaderMinor;
