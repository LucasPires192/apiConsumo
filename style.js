import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    titulo:  {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    container: {
        backgroundColor: '#f4f5f9',
        flex: 1,
        flexDirection: 'column',
    },
    item: {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginHorizontal: 10,
    },
    nome: {
        marginTop: 10,
    },
    card_image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
    }
})

export default style;