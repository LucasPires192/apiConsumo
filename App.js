import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import BtnOrderBy from './components/BtnOrderBy';
import CardInfo from './components/CardInfo';
import style from './style.js';

export default function App() {
    const [registros, setRegistros] = useState([]);
    
    const request = async (orderBy = "") => {
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php${orderBy}`;
        const response = await fetch(url);
        const parsed = await response.json();
        return parsed.data;
    }

    const filtros = [
        {id: 0, nome: 'All', param: ''},
        {id: 1, nome: 'Normal Monster', param: '?type=Normal Monster'},
        {id: 2, nome: 'Spell Cards', param: '?type=Spell Card'}
    ]

    useEffect(() => {
        const fetchData = async () => {
            const data = await request();
            setRegistros(data);
        };
        fetchData();
    }, [])

    const handleFilter = async (param) => {
        const data = await request(param);
        setRegistros(data);
    };

    return (
        <View style={style.container}>
            <Header />
            <View>
                <Text style={style.titulo}>
                    Cartas do Yu-Gi-Oh!
                </Text>
            </View>

            <View style={style.orderBy}>
                {filtros.map((filtro) => (
                    <TouchableOpacity
                        key={filtro.id}
                        onPress={() => handleFilter(filtro.param)}
                    >
                        <Text>{filtro.nome}</Text>
                    </TouchableOpacity>
                ))} 
            </View>

            <FlatList
                data={registros}
                keyExtractor={(item) => item.id.toString()}
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