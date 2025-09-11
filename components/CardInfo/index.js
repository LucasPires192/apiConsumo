import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style.js';

const CardInfo = ({imagem, nome, tipo}) => {
    return(
        <LinearGradient
            colors={['#B2933E', '#B2933E', '#372E0B']}
            style={style.card_container}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            locations={[0.1, 0.25, 0.8]}
        >
            <View style={style.card_image_container}>
                <Image 
                    source={{uri: imagem}}
                    style={style.card_image}
                />
            </View>
            <View style={style.card_info_container}>
                <Text style={style.card_info}>
                    <Text style={style.card_label}>
                        Nome:
                    </Text>
                    {'  '}{nome}{'\n'}
                    <Text style={style.card_label}>
                        Tipo:
                    </Text>
                    {'  '}{tipo}{'\n'}
                </Text>
            </View>
        </LinearGradient>
    )
}

export default CardInfo;