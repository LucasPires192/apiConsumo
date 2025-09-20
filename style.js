import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'serif',
        color: '#e6e2e2ff',
    },
    container: {
        backgroundColor: '#30140cff',
        flex: 1,
        flexDirection: 'column',
    },
    filterBtn: {
        padding: 10,
        borderColor: '#9e9e9eff',
        borderWidth: 2,
        borderRadius: 20,
        marginHorizontal: 5, 
    },
    filterBtnLabel: {
        textAlign: 'center',
        color: '#e6e2e2ff',
    }
})

export default style;