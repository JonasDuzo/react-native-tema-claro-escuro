// styles/themes.js
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#ffa0cc',
        secondary: '#FFD700',
        background: '#F5F5F5',
        surface: '#F5F5F5',
        text: '#333333',
        border: '#c0c0c0'

    }
};

export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        primary: '#5A5FFF',
        secondary: '#FFD700',
        background: '#121212',
        surface: '#464545',
        text: '#E0E0E0',
        border: '#888888'
    }
};

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
    },
    button: (theme) => ({
        borderRadius: 8,
        padding: 8,
        backgroundColor: theme.colors.primary,
    }),
    card: (theme) => ({
        borderRadius: 8,
        borderColor: theme.colors.border,
        borderWidth: 1,
        padding: 8,
        marginVertical: 10,
        backgroundColor: theme.colors.surface,
    })
});