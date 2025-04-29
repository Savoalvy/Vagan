import { Flex, Image, Text } from '@chakra-ui/react';

import { userStyle } from '~/widgets/header/user/style.tsx';

const User = () => (
    <Flex sx={userStyle.wrapper}>
        <Image
            src='https://bit.ly/naruto-sage'
            boxSize='48px'
            borderRadius='full'
            objectFit='cover'
            alt='Naruto Uzumaki'
        />
        <Flex sx={userStyle.info}>
            <Text sx={userStyle.name}>Екатерина Константинопольская</Text>
            <Text sx={userStyle.contact}>@bake_and_pie</Text>
        </Flex>
    </Flex>
);

export default User;
