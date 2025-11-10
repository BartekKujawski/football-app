import styled from 'styled-components';
import type { Menu } from '../types';

const links = ['players', 'teams', 'games', 'statistics'];

type HeaderProps = {
    handleMenu: (link: Menu) => void;
    onClick: () => void;
};

const StyledHeader = styled.header`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const StyledButton = styled.button`
    position: absolute;
    right: 40px;
    border: none;
    padding: 10px 25px;
    transition: 0.3s;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.textBackground};
    color: ${(props) => props.theme.colors.background};

    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`;

const StyledNav = styled.nav`
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled.a`
    text-transform: capitalize;
    padding: 10px 25px;
    transition: 0.3s;
    font-weight: 500;
    color: ${(props) => props.theme.colors.textPrimary};
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const Header = ({ handleMenu, onClick }: HeaderProps) => {
    return (
        <StyledHeader>
            <StyledNav>
                {links.map((link, index) => (
                    <StyledLink
                        key={index}
                        onClick={() => handleMenu(link as Menu)}
                    >
                        {link}
                    </StyledLink>
                ))}
            </StyledNav>
            <StyledButton onClick={onClick}>Toggle mode</StyledButton>
        </StyledHeader>
    );
};
