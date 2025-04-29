import { Card, Flex, Image, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import { userCardStyle } from '~/widgets/content/cookingBlogBlock/UserCard/style.tsx';

const UserCard = ({ name, username, avatar, description, sx, ...rest }): JSX.Element => (
    <Card sx={{ ...userCardStyle, ...sx }} {...rest}>
        <Flex sx={userCardStyle.user}>
            <Image src={avatar} boxSize='32px' borderRadius='full' objectFit='cover' alt={name} />
            <Flex sx={userCardStyle.userInfo}>
                <Text sx={userCardStyle.userInfo.name} noOfLines={1} lineHeight={1}>
                    {name}
                </Text>
                <Text sx={userCardStyle.userInfo.contact} noOfLines={1}>
                    {username}
                </Text>
            </Flex>
        </Flex>
        <Text noOfLines={3} sx={userCardStyle.description}>
            {description}
        </Text>
    </Card>
);

export default UserCard;
