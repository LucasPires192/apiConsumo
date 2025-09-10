import { View, Image, Text } from 'react-native';
import style from './style.js';

const CardInfo = ({imagem, nome, tipo}) => {
    return(
        <View style={style.item}>
            <Image 
                source={{uri: imagem}}
                style={style.card_image}
            />
            <Text style={style.nome}>Nome: {nome}{'\n'}</Text>
            <Text style={style.tipo}>Tipo: {tipo}{'\n'}</Text>
        </View>
    )
}

export default CardInfo;