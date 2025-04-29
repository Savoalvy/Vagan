import { Flex, Icon, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import ButtonComponent from '~/components/buttons/Buttons';
import { otherItemStyle } from '~/widgets/content/otherBlock/otherItem/style.tsx';

const OtherItem = ({ icon, name }): JSX.Element => (
    <Flex sx={otherItemStyle}>
        <Icon as={icon} />
        <Text sx={otherItemStyle.text} noOfLines={1}>
            {name}
        </Text>
        <ButtonComponent sx={{ flexShrink: 0 }} variantType='other' />
    </Flex>
);

export default OtherItem;
