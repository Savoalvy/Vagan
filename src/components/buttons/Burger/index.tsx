import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { FC, JSX } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { burgerStyle } from '~/components/buttons/Burger/style.tsx';
import { closeBurger, isBurgerOpenSelector, openBurger } from '~/store/app-slice.ts';
import { useAppSelector } from '~/store/hooks.ts';

const BurgerButton: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const isOpen = useAppSelector(isBurgerOpenSelector);

    const handleClick = () => {
        isOpen ? dispatch(closeBurger()) : dispatch(openBurger());
    };

    return (
        <IconButton
            p={isOpen ? '15px' : 3}
            size='lg'
            icon={isOpen ? <IoCloseSharp data-test-id='close-icon' /> : <HamburgerIcon />}
            sx={burgerStyle}
            aria-label='Open menu'
            onClick={handleClick}
        />
    );
};

export default BurgerButton;
