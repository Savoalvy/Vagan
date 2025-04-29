import { Flex } from '@chakra-ui/react';

import AccordionComponent from '~/components/accordion';
import { menuListStyle } from '~/components/menuList/style.tsx';

const MenuList = () => (
    <Flex sx={menuListStyle}>
        <AccordionComponent />
    </Flex>
);

export default MenuList;
