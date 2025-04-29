import { GridItem } from '@chakra-ui/react';
import { JSX } from 'react';

import MainIcon from '~/assets/icons/footerMain';
import NoteIcon from '~/assets/icons/footerNote';
import SearchIcon from '~/assets/icons/footerSearch';
import FooterButtons from '~/components/buttons/FooterMain';
import { footerStyle } from '~/widgets/footer/style.tsx';

const FOOTER_BUTTONS_CONFIG = [
    {
        label: 'Главная',
        icon: <MainIcon />,
        onClick: () => console.log('Главная'),
    },
    {
        label: 'Поиск',
        icon: <SearchIcon />,
        onClick: () => console.log('Поиск'),
    },
    {
        label: 'Записать',
        icon: <NoteIcon />,
        onClick: () => console.log('Записать'),
    },
    {
        label: 'Мой профиль',
        isProfile: true,
        imageUrl: null,
        onClick: () => console.log('Профиль'),
    },
];

const Footer = (): JSX.Element => (
    <GridItem data-test-id='footer' sx={footerStyle}>
        {FOOTER_BUTTONS_CONFIG.map((btn, index) => (
            <FooterButtons key={index} button={btn} />
        ))}
    </GridItem>
);

export default Footer;
