import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { defaultStyles } from '../styles/themes'
import { useRouter } from 'expo-router';

export default function Details() {
    const theme = useTheme();
    const router = useRouter();

    return (
        <View style={[defaultStyles.container, { backgroundColor: theme.colors.background }]}>

            <Text style={[defaultStyles.text, { color: theme.colors.text }]} >
                Página de Detalhes
            </Text>

            <TouchableOpacity
                style={defaultStyles.button(theme)}
                onPress={() => router.back()}
            >
                <Text>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}