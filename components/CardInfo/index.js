import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style.js';

const CardInfo = ({imagem, nome, tipo}) => {
    return(
        <LinearGradient
            colors={['#B2933E', '#B2933E', '#372E0B']}
            style={style.card_container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.25, 0.8]}
        >
            <Image 
                source={{uri: imagem}}
                style={style.card_image}
            />
            <Text style={style.card_nome}>Nome: {nome}{'\n'}</Text>
            <Text style={style.card_tipo}>Tipo: {tipo}{'\n'}</Text>
        </LinearGradient>
    )
}

export default CardInfo;