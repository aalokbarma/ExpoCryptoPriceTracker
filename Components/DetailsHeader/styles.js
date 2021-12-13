import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        flex: 1,
        marginTop: 20,
        padding: 5,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        borderBottomWidth: 1,
        borderBottomColor: '#777',
        backgroundColor: '#585858',
    },
    coinDetails: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    image: {
        width: 25,
        height: 25,
    },
    coinSymbol: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'lightgray',
        marginHorizontal: 5,
        textTransform: 'uppercase'
    },
    ranking: {
        color: 'white',
        paddingHorizontal: 3,
        borderRadius: 5,
        backgroundColor: "#333"
    },
    text: {
        fontSize: 20,
        color: '#f00',
    },
    backButton: {
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    iconsContainer: {
        flexDirection: 'row',
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Styles;