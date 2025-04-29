import { Avatar, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { JSX } from 'react';
import { BsPeople } from 'react-icons/bs';

import ButtonComponent from '~/components/buttons/Buttons';
import { authorRecipeStyle } from '~/widgets/content/authorRecipe/style.tsx';
import StatisticComponent from '~/widgets/header/statistic';

const authorConfig = {
    name: 'Сергей Разумов',
    username: '@serge25',
    role: 'Автор рецепта',
    avatar: '/images/recipeAuthor.svg',
};

const AuthorRecipe = (): JSX.Element => (
    <Flex sx={authorRecipeStyle.wrapper}>
        <Avatar
            name={authorConfig.name}
            src={authorConfig.avatar}
            sx={authorRecipeStyle.avatar}
            size='xl'
        />
        <VStack sx={authorRecipeStyle.content}>
            <HStack sx={authorRecipeStyle.topSection}>
                <VStack align='start' sx={authorRecipeStyle.nameBlock}>
                    <Text variant='authorName'>{authorConfig.name}</Text>
                    <Text variant='authorContact'>{authorConfig.username}</Text>
                </VStack>
                <Text variant='authorRecipe' sx={authorRecipeStyle.roleText}>
                    {authorConfig.role}
                </Text>
            </HStack>

            <HStack sx={authorRecipeStyle.bottomSection}>
                <ButtonComponent variantType='subscribe' />
                <StatisticComponent
                    variant='card'
                    config={[
                        {
                            icon: BsPeople,
                            value: '125',
                        },
                    ]}
                />
            </HStack>
        </VStack>
    </Flex>
);

export default AuthorRecipe;
