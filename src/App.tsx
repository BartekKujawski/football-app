import { createGlobalStyle } from 'styled-components';
import { useMenu } from './hooks/useMenu';
import { Header } from './components/Header';
import { Players } from './components/Players';
import { Teams } from './components/Teams';
import { Games } from './components/Games';
import { Statistics } from './components/Statistics';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
`;

const App = () => {
    const { nav, handleMenu } = useMenu();

    return (
        <>
            <GlobalStyle />
            <Header handleMenu={handleMenu} />
            {nav === 'players' && <Players />}
            {nav === 'teams' && <Teams />}
            {nav === 'games' && <Games />}
            {nav === 'statistics' && <Statistics />}
        </>
    );
};

export { App };
