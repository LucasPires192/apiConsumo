import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import CardInfo from './components/CardInfo';
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
                    <CardInfo 
                        imagem = {item.card_images[0].image_url_small}
                        nome = {item.name}
                        tipo = {item.type}
                    />
                }
            />
        </View>
    );
}