import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import CardInfo from './components/CardInfo';
import style from './style.js';

export default function App() {
    const [registros, setRegistros] = useState([]);
    
    const request = async (orderBy = "") => {
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt${orderBy}`;
        const response = await fetch(url);
        const parsed = await response.json();
        return parsed.data;
    }

    const filters = [
        {id: 0, name: "All", param: ""},
        {id: 1, name: "Effect Monster", param: "Effect Monster"},
        {id: 2, name: "Flip Effect Monster", param: "Flip Effect Monster"},
        {id: 3, name: "Flip Tuner Effect Monster", param: "Flip Tuner Effect Monster"},
        {id: 4, name: "Gemini Monster", param: "Gemini Monster"},
        {id: 5, name: "Normal Monster", param: "Normal Monster"},
        {id: 6, name: "Normal Tuner Monster", param: "Normal Tuner Monster"},
        {id: 7, name: "Pendulum Effect Monster", param: "Pendulum Effect Monster"},
        {id: 8, name: "Pendulum Effect Ritual Monster", param: "Pendulum Effect Ritual Monster"},
        {id: 9, name: "Pendulum Flip Effect Monster", param: "Pendulum Flip Effect Monster"},
        {id: 10, name: "Pendulum Normal Monster", param: "Pendulum Normal Monster"},
        {id: 11, name: "Pendulum Tuner Effect Monster", param: "Pendulum Tuner Effect Monster"},
        {id: 12, name: "Ritual Effect Monster", param: "Ritual Effect Monster"},
        {id: 13, name: "Ritual Monster", param: "Ritual Monster"},
        {id: 14, name: "Spell Card", param: "Spell Card"},
        {id: 15, name: "Spirit Monster", param: "Spirit Monster"},
        {id: 16, name: "Toon Monster", param: "Toon Monster"},
        {id: 17, name: "Trap Card", param: "Trap Card"},
        {id: 18, name: "Tuner Monster", param: "Tuner Monster"},
        {id: 19, name: "Union Effect Monster", param: "Union Effect Monster"},
        {id: 20, name: "Fusion Monster", param: "Fusion Monster"},
        {id: 21, name: "Link Monster", param: "Link Monster"},
        {id: 22, name: "Pendulum Effect Fusion Monster", param: "Pendulum Effect Fusion Monster"},
        {id: 23, name: "Synchro Monster", param: "Synchro Monster"},
        {id: 24, name: "Synchro Pendulum Effect Monster", param: "Synchro Pendulum Effect Monster"},
        {id: 25, name: "Synchro Tuner Monster", param: "Synchro Tuner Monster"},
        {id: 26, name: "XYZ Monster", param: "XYZ Monster"},
        {id: 27, name: "XYZ Pendulum Effect Monster", param: "XYZ Pendulum Effect Monster"},
        {id: 28, name: "Skill Card", param: "Skill Card"},
        {id: 29, name: "Token", param: "Token"}
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
                <Text style={style.title}>
                    Cartas do Yu-Gi-Oh!
                </Text>
            </View>

            <View style={style.filter}>
                <FlatList
                    horizontal
                    data={filters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={style.filterBtn}
                            onPress={() => handleFilter(item.param?`&type=${item.param}`:"")}
                        >
                            <Text style={style.filterBtnLabel}>{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>

            <FlatList
                data={registros}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>
                    <CardInfo 
                        image = {item.card_images[0].image_url_small}
                        name = {item.name}
                        type = {item.type}
                    />
                }
            />
        </View>
    );
}