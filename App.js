import React, { useState, useEffect } from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import Header from './components/Header';
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
            <Header />
            <View>
                <Text style={style.titulo}>
                    Cartas do Yu-Gi-Oh!
                </Text>
            </View>

            <FlatList
                data={registros}
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>
                    <View style={style.item}>
                        <Image 
                            source={{uri: item.card_images[0].image_url_small}}
                            style={style.card_image}
                        />
                        <Text style={style.nome}>Nome: {item.name}{'\n'}</Text>
                        <Text style={style.tipo}>Tipo: {item.type}{'\n'}</Text>
                    </View>
                }
            />
        </View>
    );
}