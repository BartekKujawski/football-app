import type { Menu } from '../types';

const links = ['players', 'teams', 'games', 'statistics'];

type HeaderProps = {
    handleMenu: (link: Menu) => void;
};

const Header = ({ handleMenu }: HeaderProps) => {
    return (
        <>
            <nav>
                {links.map((link, index) => (
                    <a key={index} onClick={() => handleMenu(link as Menu)}>
                        {link}
                    </a>
                ))}
            </nav>
        </>
    );
};

export { Header };
