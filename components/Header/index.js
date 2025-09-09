import { View, Image } from 'react-native';
import style from './style.js'

const Header = () => {
    return(
        <View style={style.header}>
            <Image 
                source={require('../../img/logo.png')}
                style={style.logo}
            />
        </View>
    )
}

export default Header;