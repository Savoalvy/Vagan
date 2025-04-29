import { Flex, Image, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import { userRecommendedStyle } from '~/widgets/content/userRecomendation/style.tsx';

const UserRecommendedComponent = ({ src, description, sx, ...rest }): JSX.Element => (
    <Flex sx={{ ...userRecommendedStyle, ...sx }} {...rest}>
        <Image
            src='https://bit.ly/naruto-sage'
            boxSize='16px'
            borderRadius='full'
            objectFit='cover'
            alt='Naruto Uzumaki'
        />
        <Text noOfLines={1} fontSize='14px' lineHeight={1}>
            Наруто узумаки рекомендует{/*{description}*/}
        </Text>
    </Flex>
);

export default UserRecommendedComponent;
