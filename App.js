import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import style from './style.js';

const request = async (callback) => {
    const response = await fetch('https://swapi.dev/api/people/');
    const parsed = await response.json();
    callback(parsed.results);
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
                    StarWars
                </Text>
            </View>

            <FlatList
                data={registros}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({item}) =>
                    <Text style={style.item}>
                        <Text>Nome: {item.name}{'\n'}</Text>
                        <Text>Peso: {item.mass}{'\n'}</Text>
                    </Text>
                }
            />
        </View>
    );
}