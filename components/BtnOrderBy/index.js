import { Text, TouchableOpacity } from 'react-native';
import style from './style.js';

const BtnOrderBy = ({btnName}) => {
    return(
        <TouchableOpacity
            style={style.btnOrderBy}
        >
            <Text>{btnName}</Text>
        </TouchableOpacity>
    )
}

export default BtnOrderBy;