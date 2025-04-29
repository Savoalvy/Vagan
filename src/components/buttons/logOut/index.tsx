import { Link, Text } from '@chakra-ui/react';
import { FC, JSX } from 'react';

import LogOutIcon from '~/assets/icons/logOut';

const LogOutButton: FC = (): JSX.Element => (
    <Link
        fontSize='xs'
        fontWeight='semiBold'
        lineHeight='1.33'
        sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}
    >
        <LogOutIcon />
        <Text>Выйти</Text>
    </Link>
);

export default LogOutButton;
