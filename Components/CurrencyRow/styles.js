import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Styles = StyleSheet.create({
    mainRow: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 30,
        height: 30,
    },
    nameColumn: {
        marginLeft: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'capitalize',
    },
    priceChangeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ranking: {
        color: 'white',
        paddingHorizontal: 7,
        borderRadius: 5,
        backgroundColor: "#555"
    },
    currCode: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'lightgray',
        marginLeft: 3,
        textTransform: 'uppercase'
    },
    upArrow: {
        // marginTop: 2,
        marginBottom: -2,
        marginLeft: -3,
        marginRight: -3,
    },
    priceChange: {
        color: '#0f0',
    },
    graphSection: {

    },
    graphText: {
        fontSize: 16,
        color: 'red',
        textDecorationStyle: 'dashed',
        textDecorationLine: 'line-through',
    },
    rightSection: {
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
    },
    marketCap: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
});

export default Styles;