import { Avatar, Box, Button, Icon, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import { mainFooterStyle } from '~/components/buttons/FooterMain/style.tsx';

const FooterButtons = ({ button }): JSX.Element => (
    <Button
        sx={mainFooterStyle}
        onClick={button.onClick}
        aria-label={button.label}
        flexDirection='column'
    >
        {button.isProfile ? (
            <Box sx={mainFooterStyle.avatar}>
                <Avatar boxSize='inherit' src={button.imageUrl} />
            </Box>
        ) : (
            <Icon boxSize='24px'>{button.icon}</Icon>
        )}
        <Text sx={mainFooterStyle.text}>{button.label}</Text>
    </Button>
);

export default FooterButtons;
