import { Flex, Icon, Text } from '@chakra-ui/react';
import { FC, JSX } from 'react';

import { categoryStyle } from '~/widgets/content/newReceipeBlock/slider/card/categoryTab/style.tsx';

const CategoryComponent: FC = ({ icon, description, sx, ...rest }): JSX.Element => (
    <Flex sx={{ ...categoryStyle, ...sx }} {...rest}>
        <Icon as={icon} />
        <Text fontSize='14px'>{description}</Text>
    </Flex>
);

export default CategoryComponent;
