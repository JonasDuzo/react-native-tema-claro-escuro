import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';
import { defaultStyles } from '../styles/themes'

export default function Home() {
    const theme = useTheme();

    return (
        <View style={[defaultStyles.container, { backgroundColor: theme.colors.background }]}>

            <Text style={[defaultStyles.text, { color: theme.colors.text }]}>
                Página Inicial
            </Text>

            <Text style={defaultStyles.card(theme)}>
                Card
            </Text>

            <Link href={'details'} asChild>
                <TouchableOpacity style={defaultStyles.button(theme)}>
                    <Text>Ir para Detalhes</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

