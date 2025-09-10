import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    card_container:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    card_image: {
        height: 300,
        width: '100%',
        resizeMode: 'contain',
    }
})

export default style;