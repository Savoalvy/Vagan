import { DrawerFooter } from '@chakra-ui/icons';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';

import AccordionComponent from '~/components/accordion';
import BreadcrumbComponent from '~/components/breadcrumb';
import { closeBurger, isBurgerOpenSelector } from '~/store/app-slice.ts';
import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';
import LogOutBlock from '~/widgets/sideBarLeft/logOutBlock';

const BurgerMenu = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(isBurgerOpenSelector);

    const onClose = () => {
        dispatch(closeBurger());
    };

    return (
        <Drawer data-test-id='nav' isOpen={isOpen} placement='top' onClose={onClose}>
            <DrawerOverlay mt={{ base: '64px', bp1: '80px' }} />
            <DrawerContent
                borderRadius='12px'
                maxH={{ base: '652px', bp1: '868px' }}
                w='344px'
                ml='auto'
                mr={2}
                gap={3}
            >
                <DrawerHeader mt={{ base: '64px', bp1: '80px' }} p='16px 20px 12px 20px'>
                    <BreadcrumbComponent variant='burger' />
                </DrawerHeader>
                <DrawerBody pl={2.5} pr={2}>
                    <AccordionComponent />
                </DrawerBody>
                <DrawerFooter justifyContent='flex-start' px={0} pb={8} h='144px'>
                    <LogOutBlock />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default BurgerMenu;
