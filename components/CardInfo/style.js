import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    card_container:{
        flex: 1,
        gap: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        margin: 10,
    },
    card_image_container: {
        height: 320,
        width: 200,
        overflow: 'hidden',
    },
    card_image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    card_info: {
        fontFamily: 'serif',
        fontSize: 16,
        fontWeight: 500,
    },
    card_label: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 800,
        textAlign: 'left',
    },
})

export default style;