import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    headerMinor: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftSection:{
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    name:{
        fontSize: 14,
        fontWeight: '600',
    },
    price:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: -5,
    },
    rightSection:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    priceChangeContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 5,
        // backgroundColor: '#20f025'
    },
    priceChangeValue:{
        color: 'white',
        fontSize: 12,
        fontWeight: '700',
    },
    dropArrow: {
        marginLeft: -8,
        marginTop: -3,
        marginBottom: -3,
    },
});

export default Styles;