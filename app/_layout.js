import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { lightTheme, darkTheme } from '../styles/themes';

export default function Layout() {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: theme.colors.background,
                        },
                        navigationBarColor: theme.colors.background,
                        statusBarBackgroundColor: theme.colors.background,
                        headerTintColor: theme.colors.text,
                    }}
                >
                    <Stack.Screen name="index" options={{ title: 'Home' }} />
                    <Stack.Screen name="details" options={{ title: 'Detalhes' }} />
                </Stack>
            </PaperProvider>
        </SafeAreaProvider>
    );
}