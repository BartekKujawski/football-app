import { useState } from 'react';
import type { Menu } from '../types';

const useMenu = () => {
    const [nav, setNav] = useState<Menu>('teams');

    const handleMenu = (link: Menu) => {
        setNav(link);
    };

    return { nav, handleMenu, setNav };
};

export { useMenu };
