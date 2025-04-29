import { Link } from '@chakra-ui/react';

import IconLogo from '~/widgets/header/Logo/Icon';
import { logoStyle } from '~/widgets/header/Logo/style.tsx';
import TextLogo from '~/widgets/header/Logo/Text';

const Logo = () => (
    <Link href='/main' sx={logoStyle}>
        <IconLogo />
        <TextLogo />
    </Link>
);

export default Logo;
