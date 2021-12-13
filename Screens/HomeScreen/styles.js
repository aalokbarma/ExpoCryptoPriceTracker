import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#555',
    },
    nothingContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
    },
    nothingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    oopsImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    }
});

export default Styles;