import { Flex, Text } from '@chakra-ui/react';

import LogOutButton from '~/components/buttons/logOut';
import { logOutBlockStyle } from '~/widgets/sideBarLeft/logOutBlock/style.tsx';

const LogOutBlock = () => (
    <Flex sx={logOutBlockStyle}>
        <Text sx={logOutBlockStyle.version}>Версия программы 03.25</Text>
        <Text sx={logOutBlockStyle.info}>
            Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
        </Text>
        <LogOutButton />
    </Flex>
);

export default LogOutBlock;
