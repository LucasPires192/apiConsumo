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
    },
    filterBtnLabel: {
        textAlign: 'center',
        color: '#e6e2e2ff',
    }
})

export default style;