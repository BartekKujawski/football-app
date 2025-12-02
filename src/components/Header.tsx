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
    padding: 0 20px;

    @media (max-width: 768px) {
        height: auto;
        min-height: 80px;
        flex-direction: column;
        padding: 10px;
    }
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
    font-size: 14px;

    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        position: static;
        margin-top: 10px;
        padding: 8px 15px;
        font-size: 12px;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    @media (max-width: 768px) {
        height: auto;
        width: 100%;
        gap: 0;
    }
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

    @media (max-width: 768px) {
        padding: 8px 15px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 6px 10px;
        font-size: 12px;
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
