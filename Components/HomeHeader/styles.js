import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    headerSection: {
        flexDirection: 'column',
    },
    homeHeaderComponent: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        paddingHorizontal: 10,
        paddingTop: 30,
        paddingBottom: 8,
        backgroundColor: '#121212',
        borderBottomColor: '#999',
        borderBottomWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerLeftSection:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonsMinorSection: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    headingMinor: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#555',
        marginLeft: 0,
        padding: 5,
    },  
    headingMain: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    filterSection: {
        backgroundColor: '#121212',
        width: '100%',
        flex: 1,
        height: 'auto',
    },
    filtersFlatlist: {
        paddingLeft: 10,
    },
    filterText: {
        fontSize: 18,
        color: 'red',
    },
    searchBarContainer: {
        // width: '100%',
        marginLeft: 10,
        height: 30,
        backgroundColor: '#4f4f60',
        paddingHorizontal: 5,
        borderRadius: 5,
        // flex: 1,
        width: '55%',
    },
    searchbar: {
        fontSize: 16,
        paddingBottom: 8,
        marginBottom: -10,
        color: 'white'
    },
});

export default Styles;