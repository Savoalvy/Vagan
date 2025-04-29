import { GridItem } from '@chakra-ui/react';

import MenuList from '~/components/menuList';
import LogOutBlock from '~/widgets/sideBarLeft/logOutBlock';
import { sideBarLeftStyle } from '~/widgets/sideBarLeft/style.tsx';

const SideBarLeft = () => (
    <GridItem sx={sideBarLeftStyle}>
        <MenuList />
        <LogOutBlock />
    </GridItem>
);

export default SideBarLeft;
