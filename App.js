import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import style from './style.js';

const request = async (callback) => {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const parsed = await response.json();
    callback(parsed.data);
}

export default function App() {
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        request(setRegistros);
    }, [])

    return (
        <View style={style.container}>
            <View>
                <Text style={style.superior}>
                    Cartas do Yu-Gi-Oh!
                </Text>
            </View>

            <FlatList
                data={registros}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({item}) =>
                    <Text style={style.item}>
                        <Text>Nome: {item.name}{'\n'}</Text>
                        <Text>Tipo: {item.type}{'\n'}</Text>
                    </Text>
                }
            />
        </View>
    );
}