import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useMenu } from './hooks/useMenu';
import { Header } from './components/Header';
import { Players } from './components/Players/Players';
import { Teams } from './components/Teams/Teams';
import { Games } from './components/Games';
import { Statistics } from './components/Statistics';
import { useState } from 'react';

const queryClient = new QueryClient();

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
}

body {
    background-color: ${(props) => props.theme.colors.background};
}
`;

export const App = () => {
    const { nav, handleMenu } = useMenu();
    const [isLight, setIsLight] = useState(false);

    const light = {
        colors: {
            primary: '#009FE5',
            textPrimary: '#333',
            textHoverPrimary: '#000',
            background: '#eee',
            contentBackground: '#fff',
            textBackground: '#333',
        },
    };

    const dark = {
        colors: {
            primary: '#009FE5',
            textPrimary: '#ddd',
            textHoverPrimary: '#fff',
            background: '#222',
            contentBackground: '#333',
            textBackground: '#ddd',
        },
    };

    const toggleLight = () => {
        setIsLight((prevLight) => !prevLight);
    };

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={isLight ? light : dark}>
                    <GlobalStyle />
                    <Header handleMenu={handleMenu} onClick={toggleLight} />
                    {nav === 'players' && <Players />}
                    {nav === 'teams' && <Teams />}
                    {nav === 'games' && <Games />}
                    {nav === 'statistics' && <Statistics />}
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
};
