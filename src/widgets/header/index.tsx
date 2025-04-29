import { GridItem } from '@chakra-ui/react';
import { JSX } from 'react';
import { BsBookmarkHeart, BsFillPeopleFill } from 'react-icons/bs';

import SmileIcon from '~/assets/icons/smile';
import BreadcrumbComponent from '~/components/breadcrumb';
import BurgerButton from '~/components/buttons/Burger';
import { isBurgerOpenSelector } from '~/store/app-slice.ts';
import { useAppSelector } from '~/store/hooks.ts';
import Logo from '~/widgets/header/Logo';
import StatisticComponent from '~/widgets/header/statistic';
import { headerStyle } from '~/widgets/header/style.tsx';
import User from '~/widgets/header/user';

const STATISTIC_CONFIG = [
    {
        icon: BsBookmarkHeart,
        value: 185,
    },
    {
        icon: BsFillPeopleFill,
        value: 589,
    },
    {
        icon: SmileIcon,
        value: 587,
    },
];
const Header = (): JSX.Element => {
    const isOpen = useAppSelector(isBurgerOpenSelector);

    return (
        <GridItem
            data-test-id='header'
            sx={{ ...headerStyle, ...(isOpen && { bg: 'white', zIndex: 1600 }) }}
        >
            <Logo />
            <BreadcrumbComponent />
            <User />
            {!isOpen && <StatisticComponent variant='header' config={STATISTIC_CONFIG} />}

            <BurgerButton data-test-id='hamburger-icon' />
        </GridItem>
    );
};

export default Header;
